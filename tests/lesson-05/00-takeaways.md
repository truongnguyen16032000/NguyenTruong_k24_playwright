
## 1. Document Object Model (DOM)

### Cấu trúc của một Node
Một node (phần tử HTML) thông thường được cấu tạo từ các thành phần chính:

1. **Thẻ (Tag) đóng / mở**: Định nghĩa loại phần tử.
2. **Thuộc tính (Attribute)**: Cung cấp thông tin bổ sung cho thẻ.
3. **Giá trị thuộc tính (Attribute Value)**: Giá trị gán cho thuộc tính.
4. **Nội dung văn bản (Text content)**: Phần hiển thị bên trong thẻ.

**Ví dụ:**
```html
<button id="add-task">Add Task</button>
```

| Thành phần | Giá trị trong ví dụ |
| :--- | :--- |
| **Thẻ mở / đóng** | `<button>` ... `</button>` |
| **Thuộc tính** | `id` |
| **Giá trị thuộc tính** | `add-task` |
| **Text content** | `Add Task` |

---

### Các thẻ HTML thông dụng

| Thẻ | Phân loại / Ý nghĩa |
| :--- | :--- |
| `<html>` | Thẻ gốc (root) chứa toàn bộ trang web. |
| `<head>` | Chứa metadata: tiêu đề (title), cấu hình SEO, script, stylesheet. |
| `<body>` | Chứa toàn bộ nội dung hiển thị của website. |
| `<div>` | Thẻ khối (block container) dùng để nhóm các phần tử. |
| `<span>` | Thẻ nội dòng (inline container) dùng để bọc văn bản/phần tử nhỏ. |
| `<header>`, `<footer>`, `<nav>`, `<section>` | Các thẻ ngữ nghĩa (Semantic tags) dựng bố cục trang. |
| `<h1>` - `<h6>` | Các thẻ tiêu đề (Heading). |
| `<p>` | Đoạn văn bản (Paragraph). |
| `<a>` | Thẻ liên kết (Hyperlink). |
| `<ul>`, `<ol>`, `<li>` | Danh sách không thứ tự (`<ul>`), có thứ tự (`<ol>`) và phần tử con (`<li>`). |

---

## 2. Selector & XPath

### XPath (XML Path Language)

- **XPath tuyệt đối (Absolute XPath)**:
  - Bắt đầu bằng `/` (đi từ thẻ gốc `html`).
  - *Ví dụ:* `/html/body/div[1]/button`

- **XPath tương đối (Relative XPath) - *Khuyên dùng***:
  - Bắt đầu bằng `//`.
  - Cú pháp chuẩn:
    ```xpath
    //tenthe[@thuoctinh='giatri']
    ```
  - *Ví dụ:*
    ```xpath
    //button[@id='add-task']
    ```

---

## 3. Playwright Basic 

### Cấu trúc Test Case & Step

#### Khởi tạo Test
```typescript
import { test, expect } from '@playwright/test';

test('Tên test case', async ({ page }) => {
  // Code thực thi của test case
});
```

#### Sử dụng Steps
`test.step` giúp chia nhỏ test case thành các bước rõ ràng, hỗ trợ đọc report trực quan.

```typescript
await test.step('Tên step', async () => {
  // Code thực thi của step
});
```

---

### Điều hướng (Navigation)

```typescript
await page.goto('https://example.com');
```

---

### Tìm phần tử (Locate)

Sử dụng `page.locator()` với CSS selector hoặc XPath để trỏ đến phần tử trên trang.

```typescript
const addTaskBtn = page.locator("//button[@id='add-task']");
```

---

### Các thao tác tương tác

#### 1. Click
```typescript
// Single click (Click đơn)
await page.locator("//button[@id='add-task']").click();

// Double click (Click kép)
await page.locator("//button[@id='add-task']").dblclick();

// Right click (Click chuột phải)
await page.locator("//button[@id='add-task']").click({ button: 'right' });
```

#### 2. Nhập dữ liệu (Input / Fill)
```typescript
await page.locator("//input[@id='username']").fill('my_username');
```

#### 3. Radio Button
```typescript
await page.locator("//input[@type='radio' and @value='gender-male']").check();
```

#### 4. Checkbox
```typescript
// Tích chọn (Check)
await page.locator("//input[@type='checkbox']").check();

// Bỏ tích chọn (Uncheck)
await page.locator("//input[@type='checkbox']").uncheck();
```

#### 5. Dropdown (Select Option)
```typescript
await page.locator("select#country").selectOption('VN');
```

#### 6. Tải lên tệp (Upload File)
```typescript
await page.locator("input[type='file']").setInputFiles('path/to/file.pdf');
```
