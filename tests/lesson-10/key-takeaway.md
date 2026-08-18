###1, Hook 
- là những đoạn code được playwight chạy trước hoặc sau test 
 + beforeAll : chạy 1 lần trước tất cả test
 + beforeEach: Chạy trước mỗi test 
 + afterEach: chạy sau mỗi test 
 + afterAll: chạy 1 lần sau tất cả test
###2. Action
Bạn muốn làm gì?             
| -------------------- | --------------------------------- |
| Click                | `locator.click()`                 |
| Nhập input           | `locator.fill()`                  |
| Lấy text             | `locator.innerText()`             |
| Lấy text content     | `locator.textContent()`           |
| Lấy value input      | `locator.inputValue()`            |
| Lấy attribute        | `locator.getAttribute()`          |
| Lấy nhiều text       | `locator.allTextContents()`       |

 ###3, Assertion
 - Kiểm tra expect của action 
| Kiểm tra hiển thị    | `expect(locator).toBeVisible()`   |
| Kiểm tra text        | `expect(locator).toHaveText()`    |
| Kiểm tra chứa text   | `expect(locator).toContainText()` |
| Kiểm tra input value | `expect(locator).toHaveValue()`   |
| Kiểm tra URL         | `expect(page).toHaveURL()`        |
| Kiểm tra enabled     | `expect(locator).toBeEnabled()`   |
| Kiểm tra disabled    | `expect(locator).toBeDisabled()`  |

