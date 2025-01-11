# CSS Measurement Scales

In CSS, measurement scales are used to define sizes, spacing, and proportions for elements.

---

## Absolute Units

Absolute units are fixed, meaning their size will not change based on the screen size or other elements. They are useful when you want something to stay the exact same size.

### 1. Pixels (`px`)

Pixels are tiny dots on the screen. If you set something to `16px`, it will always be 16 dots wide, no matter the screen size.

**Example:**

```css
p {
  font-size: 16px; /* The text will be 16 pixels tall */
}
```

### 2. Centimeters (`cm`)

This unit measures real-world centimeters. It's rarely used in web design but can be useful for printing layouts.

**Example:**

```css
div {
  width: 5cm; /* The box will be 5 centimeters wide */
}
```

### 3. Inches (`in`)

Similar to centimeters but in inches. One inch equals 2.54 cm.

**Example:**

```css
img {
  height: 2in; /* The image will be 2 inches tall */
}
```

---

## Relative Units

Relative units change size depending on other factors, like the size of the parent element or the screen.

### 1. `em`

This unit is based on the font size of the parent element. For example, if the parent has a font size of `16px` and you set something to `2em`, it will be `2 x 16px = 32px`.

**Example:**

```css
div {
  font-size: 16px; /* Parent font size */
}
p {
  font-size: 0.5em; /* 32px because 2 x 16px = 32px */
}
<div fkjajgjjkahkj>
<p>

hkjahfkja
</p>
</div>

```

### 2. `rem`

This unit is based on the font size of the root element (usually `<html>`). It doesn’t depend on the parent element.

**Example:**

```css
:root {
  font-size: 16px; /* Root font size */
}
h1 {
  font-size: 2rem; /* 32px because 2 x 16px = 32px */
}
```

html

### 3. Percentages (`%`)

Percentages are relative to the size of the parent element. For example, `50%` width means half the size of the parent.

**Example:**
div width : 100px

```css
div {
  width: 50%; /* Half the width of the parent container */
}
```

---

### Relative to the Viewport

The viewport is the visible part of your web page.

#### 1. `vw` (Viewport Width)

`1vw` is 1% of the width of the viewport. If the viewport is 1000px wide, `1vw` is 10px.

**Example:**

```css
header {
  width: 100vw; /* Takes up the full width of the viewport */
}
```

#### 2. `vh` (Viewport Height)

`1vh` is 1% of the height of the viewport. If the viewport is 800px tall, `1vh` is 8px.

**Example:**

```css
section {
  height: 100vh; /* Takes up the full height of the viewport */
}
```
1920 * 760

#### 3. `vmin` and `vmax`

- `vmin`: The smaller of `vw` or `vh`.
- `vmax`: The larger of `vw` or `vh`.

**Example:**

```css
.box {
  font-size: 5vmin; 
  font-size: 6vmax; 
 /* Scales with the smaller of the viewport width or height */
}
```

---

## Special Units

### 1. `ch`

This is based on the width of the `0` character in the current font. It's useful for setting widths of text.

**Example:**

```css
input {
  width: 20ch; /* The input will be as wide as 20 zeros */
}
```

### 2. `fr` (Fractional Units in Grid)

Used in CSS Grid, `fr` divides available space into fractions. For example, `1fr 2fr` means one part for the first column and two parts for the second.

**Example:**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr; /* First column gets 1 part, second column gets 2 parts */
}
```

---

## Simple Tips for Beginners

1. **Start with `rem`**: It's consistent and makes scaling easier.
2. **Use `px` for Small Details**: For borders and small elements, `px` is simple to use.
3. **Experiment**: Play around with units like `vw` and `vh` to understand how they respond to screen size.
4. **Mix Units**: Use `calc()` to combine units (e.g., `calc(100% - 50px)`).

---

## Beginner-Friendly Example

```css
:root {
  font-size: 16px; /* Set base size */
}

body {
  margin: 0;
  padding: 0;
  font-size: 1rem; /* 16px */
}

header {
  height: 10vh; /* 10% of the viewport height */
  background-color: lightblue;
}

main {
  width: 80%; /* 80% of the parent container */
  margin: 0 auto;
  font-size: 1.2rem; /* 19.2px */
}

.footer {
  grid-template-columns: 1fr 3fr; /* Flexible columns in a grid */
}
```

---

Feel free to ask questions and experiment with these units as you build your CSS skills!
