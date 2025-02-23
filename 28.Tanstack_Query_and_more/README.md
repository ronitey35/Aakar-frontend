# React Hooks Guide

## useState Hook
The `useState` Hook allows functional components to manage state. It returns an array containing the current state value and a function to update it.

### Example 1: Counter
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

### Example 2: Form Input
```jsx
function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
```

## useEffect Hook
The `useEffect` Hook handles side effects in functional components. It runs after every render and can be controlled with dependencies.

### Example 1: Data Fetching
```jsx
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, []); // Empty dependency array means it runs once on mount

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```


## useRef Hook
The `useRef` Hook creates a mutable reference that persists across renders.

### Example 1: Focus Management
```jsx
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I'll focus on mount" />
    </div>
  );
}
```

### Example 2: Previous Value Tracking
```jsx
function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## useContext Hook
The `useContext` Hook subscribes to context updates from the nearest context provider.

### Example 1: Theme Context
```jsx
const ThemeContext = React.createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      Toggle Theme
    </button>
  );
}
```

### Example 2: User Authentication Context
```jsx
const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function UserStatus() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## useReducer Hook
The `useReducer` Hook manages complex state logic in components through a reducer function.

### Example 1: Shopping Cart
```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>
    </div>
  );
}
```

### Example 2: Form Management
```jsx
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':
      return initialState;
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    default:
      return state;
  }
}

function ComplexForm() {
  const initialState = {
    username: '',
    email: '',
    password: '',
    errors: {}
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const validateField = (field, value) => {
    if (!value) {
      dispatch({
        type: 'SET_ERROR',
        field,
        error: 'This field is required'
      });
    }
  };

  return (
    <form>
      <input
        name="username"
        value={state.username}
        onChange={handleChange}
        onBlur={(e) => validateField('username', e.target.value)}
      />
      {state.errors.username && (
        <span>{state.errors.username}</span>
      )}
      {/* Add other form fields similarly */}
      <button onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
  );
}
```

## useRef Hook
The `useRef` Hook creates a mutable reference that persists across renders.

### Example 1: Focus Management
```jsx
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I'll focus on mount" />
    </div>
  );
}
```

### Example 2: Previous Value Tracking
```jsx
function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## useMemo Hook
The `useMemo` Hook memoizes computed values to optimize performance.

### Example 1: Expensive Calculation
```jsx
function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    console.log('Computing sum...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
}
```

### Example 2: Filtered List
```jsx
function FilteredList({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## useCallback Hook
The `useCallback` Hook memoizes functions to prevent unnecessary re-renders of child components.

### Example 1: Memoized Event Handler
```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependencies because we use functional update

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

### Example 2: Debounced Search
```jsx
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const debouncedSearch = useCallback(
    debounce(async (searchTerm) => {
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      setResults(data);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```