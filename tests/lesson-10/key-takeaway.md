# Playwright – Hook, Action & Assertion

## 1. Hook

**Hook** là những đoạn code được Playwright chạy **trước hoặc sau test**.

| Hook         | Mô tả                            |
| ------------ | -------------------------------- |
| `beforeAll`  | Chạy **1 lần** trước tất cả test |
| `beforeEach` | Chạy **trước mỗi test**          |
| `afterEach`  | Chạy **sau mỗi test**            |
| `afterAll`   | Chạy **1 lần** sau tất cả test   |

---

## 2. Action

**Action** = Bạn muốn thực hiện hành động gì trên trang?

| Hành động           | Code                        |
| ------------------- | --------------------------- |
| Click               | `locator.click()`           |
| Nhập input          | `locator.fill()`            |
| Lấy text            | `locator.innerText()`       |
| Lấy text content    | `locator.textContent()`     |
| Lấy value của input | `locator.inputValue()`      |
| Lấy attribute       | `locator.getAttribute()`    |
| Lấy nhiều text      | `locator.allTextContents()` |

### Ví dụ

```ts
await page.getByRole('button', { name: 'Login' }).click();

await page.locator('#email').fill('test@example.com');

const text = await page.locator('.message').innerText();
```

---

## 3. Assertion

**Assertion** = Kiểm tra kết quả sau khi thực hiện Action.

Trong Playwright, thường sử dụng `expect()` để verify kết quả.

| Kiểm tra             | Code                              |
| -------------------- | --------------------------------- |
| Kiểm tra hiển thị    | `expect(locator).toBeVisible()`   |
| Kiểm tra text        | `expect(locator).toHaveText()`    |
| Kiểm tra chứa text   | `expect(locator).toContainText()` |
| Kiểm tra input value | `expect(locator).toHaveValue()`   |
| Kiểm tra URL         | `expect(page).toHaveURL()`        |
| Kiểm tra enabled     | `expect(locator).toBeEnabled()`   |
| Kiểm tra disabled    | `expect(locator).toBeDisabled()`  |

### Ví dụ

```ts
await expect(page.locator('.success-message'))
  .toBeVisible();

await expect(page.locator('.message'))
  .toHaveText('Login successfully');

await expect(page)
  .toHaveURL(/dashboard/);
```

-


