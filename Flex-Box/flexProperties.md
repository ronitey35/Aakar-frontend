
## What is Flexbox?
Flexbox  is a layout model in CSS that makes it easy to design flexible and responsive web layouts. It helps align and distribute space among items in a container, even when their size is unknown or dynamic.

---

## Key Properties 

### 1. `flex-grow`
Defines how much a flex item can grow relative to the rest of the items in the container.

**Example:**
```html
<div style="display: flex;">
  <div style="flex-grow: 1; background-color: lightblue;">Item 1</div>
  <div style="flex-grow: 2; background-color: lightgreen;">Item 2</div>
  <div style="flex-grow: 3; background-color: lightcoral;">Item 3</div>
</div>
```
**What Happens?**
- `Item 2` takes twice as much space as `Item 1` and `Item 3` because its `flex-grow` value is `2`.

---

### 2. `flex-shrink`
Defines how much a flex item will shrink relative to the rest of the items when there is not enough space in the container.

**Example:**
```html
<div style="display: flex; width: 300px;">
  <div style="flex-shrink: 1 ; width: 200px; background-color: lightblue;">Item 1</div>
  <div style="flex-shrink: 2; width: 200px; background-color: lightgreen;">Item 2</div>
</div>
```
**What Happens?**
- `Item 2` shrinks twice as much as `Item 1` because its `flex-shrink` value is `2`.

---

### 3. `flex-basis`
Defines the default size of a flex item before the remaining space is distributed.

**Example:**
```html
<div style="display: flex;">
  <div style="flex-basis: 100px; background-color: lightblue;">Item 1</div>
  <div style="flex-basis: 200px; background-color: lightgreen;">Item 2</div>
  <div style="flex-basis: 100px; background-color: lightcoral;">Item 3</div>
</div>
```
**What Happens?**
- Each item starts with the specified width (`flex-basis`) before any extra space is distributed.

---

### 4. `flex-wrap`
Defines whether the flex container should allow its items to wrap onto multiple lines when there is not enough space.

**Example:**
```html
<div style="display: flex; flex-wrap: wrap; width: 300px;">
  <div style="width: 150px; height: 100px; background-color: lightblue;">Item 1</div>
  <div style="width: 150px; height: 100px; background-color: lightgreen;">Item 2</div>
  <div style="width: 150px; height: 100px; background-color: lightcoral;">Item 3</div>
  <div style="width: 150px; height: 100px; background-color: lightyellow;">Item 4</div>
</div>
```
**What Happens?**
- The items wrap to the next line when the container's width is exceeded.

---


---

example: 
<div
      style="
        display: flex;
        width: 100%;
        flex-wrap: wrap-reverse;
        max-width: 700px;
        border: 2px solid black;
      "
    >
      <div
        style="flex: 1 1 400px; background-color: lightblue; text-align: center"
      >
        Box 1
      </div>
      <div
        style="
          flex: 2 1 150px;
          background-color: lightgreen;
          text-align: center;
        "
      >
        Box 2
      </div>
      <div
        style="
          flex: 1 1 100px;
          background-color: lightcoral;
          text-align: center;
        "
      >
        Box 3
      </div>
    </div>