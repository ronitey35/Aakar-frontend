# CSS Grid Layout

Welcome to the **CSS Grid Layout** This guide provides an in-depth understanding of CSS Grid, a powerful layout system for building modern web designs. With CSS Grid, you can create responsive and complex layouts with ease. Let's dive into the details!

---

## What is CSS Grid?

CSS Grid is a two-dimensional layout system for the web. It allows you to design web pages by dividing a container into rows and columns, and placing items into these grid cells. Unlike other layout methods, CSS Grid provides both horizontal and vertical alignment capabilities.

---

## Why Use CSS Grid?

- **Flexible Layouts**: Create complex layouts with minimal code.
- **Responsive Design**: Easily adapt layouts for different screen sizes.
- **Powerful Alignment**: Control horizontal and vertical placement of items.
- **Separation of Content and Design**: Simplifies maintenance and scalability.

---

## Basic Terminology

Before diving into the code, familiarize yourself with these key terms:

- **Grid Container**: The element on which `display: grid` is applied. It contains grid items.
- **Grid Item**: The direct children of the grid container.
- **Grid Line**: The lines that divide the grid into rows and columns.
- **Grid Cell**: The space between two adjacent grid lines.
- **Grid Track**: A single row or column in the grid.
- **Grid Area**: A rectangular area defined by grid cells.

### Setting Up a Grid Container

To start using CSS Grid, set the `display` property to `grid` or `inline-grid` on the container.

```css
.container {
  display: grid;
}
```

---

## Grid Properties

### Grid Container

#### `grid-template-rows` and `grid-template-columns`

Defines the rows and columns of the grid.

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}
```

#### `gap`

Defines the spacing between rows and columns.

```css
.container {
  gap: 10px;
}
```

### Grid Items

#### `grid-row` and `grid-column`

Controls the position of individual grid items.

```css
.item {
  grid-row: 1 / 3; /* Starts at row 1 and ends before row 3 */
  grid-column: 2 / 4; /* Starts at column 2 and ends before column 4 */
}
```

#### `justify-self` and `align-self`

Aligns the content of a single grid item.

```css
.item {
  justify-self: center; /* horizontal alignment */
  align-self: start; /* vertical alignment */
}
```

---

## Defining a Grid

### Explicit Grid

You explicitly define rows and columns using `grid-template-rows` and `grid-template-columns`.

```css
.container {
  grid-template-rows: 100px 100px;
  grid-template-columns: 1fr 2fr;
}
```

### Implicit Grid

Rows and columns are created automatically when items are placed outside the defined grid.

```css
.container {
  display: grid;
}
```

---

## Grid Tracks and Units

CSS Grid supports various units for defining tracks:

- **Absolute Units**: `px`, `em`, `rem`
- **Fractional Units**: `fr` (distributes available space)
- **Percentage Units**: `%`
- **Auto**: Automatically adjusts based on content

---

### Item Alignment

- `justify-items`: Aligns all grid items horizontally.
- `align-items`: Aligns all grid items vertically.
- `place-items`: Shorthand for `justify-items` and `align-items`.

```css
.container {
  justify-items: center;
  align-items: stretch;
}
```

## Practical Examples

````html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .item {
    background: lightblue;
    text-align: center;
    padding: 20px;
  }
</style>

<!-- 
## Grid Alignment

Align the grid container and items using the following properties:

### Container Alignment

- `justify-content`: Aligns grid items horizontally.
- `align-content`: Aligns grid items vertically.
- `place-content`: Shorthand for `justify-content` and `align-content`.

```css
.container {
  justify-content: center;
  align-content: start;
}
``` -->
````
