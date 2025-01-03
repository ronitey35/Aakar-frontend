# Object-Fit Property in CSS

The `object-fit` property in CSS defines how the content of an image, video, or other media should be resized to fit its container. It is particularly useful when working with fixed-size containers to control how media content fills them.

## Syntax
```css
object-fit: <value>;
```

## Property Values

### 1. `fill`
- **Behavior**: Stretches the image to fill the container.
- **Effect**: May distort the image if the aspect ratio differs.
- **Use Case**: When distortion is acceptable and the image must fully cover the container.
- **Example**:
  ```css
  img {
    object-fit: fill;
  }
  ```

### 2. `contain`
- **Behavior**: Scales the image to fit within the container while maintaining its aspect ratio.
- **Effect**: Entire image is visible but may leave empty space around it.
- **Use Case**: When the entire image must be displayed without distortion.
- **Example**:
  ```css
  img {
    object-fit: contain;
  }
  ```

### 3. `cover`
- **Behavior**: Scales the image to cover the container while maintaining its aspect ratio.
- **Effect**: May crop parts of the image if the aspect ratio differs.
- **Use Case**: When filling the container without empty space is more important than displaying the full image.
- **Example**:
  ```css
  img {
    object-fit: cover;
  }
  ```

### 4. `none`
- **Behavior**: Retains the image's original size.
- **Effect**: The image may overflow the container if it is larger.
- **Use Case**: When maintaining the original size is crucial.
- **Example**:
  ```css
  img {
    object-fit: none;
  }
  ```

### 5. `scale-down`
- **Behavior**: Scales the image down to the smallest possible size, using either `none` or `contain` depending on which is smaller.
- **Effect**: Reduces image size without distortion.
- **Use Case**: When the image should display at its original size unless it is too large.
- **Example**:
  ```css
  img {
    object-fit: scale-down;
  }
  ```

## Comparison Table
| Value        | Maintains Aspect Ratio | Can Cause Cropping | Can Cause Distortion |
|--------------|------------------------|--------------------|----------------------|
| `fill`       | No                     | No                 | Yes                  |
| `contain`    | Yes                    | No                 | No                   |
| `cover`      | Yes                    | Yes                | No                   |
| `none`       | Yes                    | No                 | No                   |
| `scale-down` | Yes                    | No (scaled down)   | No                   |

## Use Cases
- **`fill`**: When you want the image to completely fill the container, even if it causes distortion.
- **`contain`**: When it's important to display the whole image without distortion, even if there is empty space.
- **`cover`**: When filling the container is more important than displaying the whole image.
- **`none`**: When you need to keep the original size of the image without scaling.
- **`scale-down`**: When the image should display at its original size unless it exceeds the container size.

## Example Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Object-Fit Examples</title>
  <style>
    .container {
      width: 300px;
      height: 200px;
      border: 1px solid black;
      margin-bottom: 10px;
      overflow: hidden;
    }
    .fill {
      object-fit: fill;
    }
    .contain {
      object-fit: contain;
    }
    .cover {
      object-fit: cover;
    }
    .none {
      object-fit: none;
    }
    .scale-down {
      object-fit: scale-down;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="example.jpg" class="fill" alt="fill example">
  </div>
  <div class="container">
    <img src="example.jpg" class="contain" alt="contain example">
  </div>
  <div class="container">
    <img src="example.jpg" class="cover" alt="cover example">
  </div>
  <div class="container">
    <img src="example.jpg" class="none" alt="none example">
  </div>
  <div class="container">
    <img src="example.jpg" class="scale-down" alt="scale-down example">
  </div>
</body>
</html>
```

