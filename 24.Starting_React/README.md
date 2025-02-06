## 1. Props

### Understanding Props

Props (short for properties) are read-only data passed to React components. They follow a unidirectional data flow (parent to child).

### Basic Props Usage

```jsx
// Parent Component
function ParentComponent() {
  return (
    <ChildComponent
      name="John"
      age={25}
      isStudent={true}
      hobbies={["reading", "coding"]}
    />
  );
}

// Child Component
function ChildComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      <ul>
        {props.hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Props Destructuring

```jsx
// Method 1: Function parameter destructuring
function UserProfile({ name, email, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}

// Method 2: Inside component
function UserProfile(props) {
  const { name, email, role } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}
```

### Default Props

```jsx
function Button({ text = "Click Me", type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
```

## 2. Props Drilling

### Understanding Props Drilling

Props drilling occurs when props need to be passed through multiple components that don't need the data themselves.

### Example of Props Drilling Problem

```jsx
function GrandParent() {
  const [user, setUser] = useState({ name: "John", role: "Admin" });

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user.name}!</h1>;
}

// Consumer component (anywhere in the tree)
function UserProfile() {
  const { user } = useContext(UserContext);
  return <h1>Hello, {user.name}!</h1>;
}
```

## 3. useState Hook

### Basic Usage

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### State with Objects

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
      <input
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
      />
    </form>
  );
}
```

### State with Arrays

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={() => addTodo("New Task")}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

## 4. Event Handling

### Basic Event Handlers

```jsx
function EventDemo() {
  const handleClick = (e) => {
    console.log("Button clicked!", e);
  };

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </form>
  );
}
```

### Event Handlers with Parameters

```jsx
function ItemList() {
  const handleItemClick = (id, e) => {
    console.log(`Item ${id} clicked!`, e);
  };

  return (
    <ul>
      <li onClick={(e) => handleItemClick(1, e)}>Item 1</li>
      <li onClick={(e) => handleItemClick(2, e)}>Item 2</li>
    </ul>
  );
}
```

### Complex Form Handling

```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Process form data
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
```

### Event Bubbling and Capturing

```jsx
function EventPropagation() {
  const handleParentClick = (e) => {
    console.log("Parent clicked");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevents event from bubbling up
    console.log("Child clicked");
  };

  return (
    <div onClick={handleParentClick}>
      Parent
      <button onClick={handleChildClick}>Child</button>
    </div>
  );
}
```

### Custom Event Handlers with useCallback

```jsx
function OptimizedList() {
  const [items, setItems] = useState([]);

  const handleItemClick = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          style={{ background: item.selected ? "yellow" : "none" }}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
```
