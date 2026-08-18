import { test, expect } from "@playwright/test";

test.describe("Material page tests", () => {

    test.beforeEach(async ({ page }) => {
        await test.step("Pre-condition: Mở trang home page", async () => {
            await page.goto("https://material.playwrightvn.com/");
        });
    });

    test("Test 1: Register page", async ({ page }) => {

        await test.step(
            "Step 1: Click vào trang register page, verify tiêu đề 'User Registration' hiển thị",
            async () => {

                // click vào trang register page
                await page.getByText("Bài học 1: Register Page").click();

                // verify tiêu đề "User Registration"
                await expect(page).toHaveTitle("User Registration");
            }
        );

        await test.step(
            "Step 2: Điền thông tin email và username, assert các thông tin vừa điền xuất hiện ở table",
            async () => {

                // Điền thông tin email và username
                await page.locator("#username").fill("nguyentruong");
                await page.locator("#email").fill("nguyentruong@gmail.com");

                // Assert các thông tin vừa điền
                await expect(page.locator("#username")).toHaveValue("nguyentruong");

                await expect(page.locator("#email")).toHaveValue("nguyentruong@gmail.com");
            }
        );

    }); // đóng Test 1


    test("Test 2: Product page", async ({ page }) => {

        await test.step(
            "Step 1: Click vào trang Bài học 2: Product page, verify tiêu đề 'Simple E-commerce' hiển thị",
            async () => {

                // Click vào trang Bài học 2: Product page
                await page.getByText("Bài học 2: Product page").click();

                // Verify tiêu đề "Simple E-commerce"
                await expect(page.locator("//h1[@class='ecommerce-title']")).toHaveText("Simple E-commerce");
            }
            
        );
        await test.step("Step 2: Thêm sản phẩm 1: 2 sản phẩm; kiểm tra giỏ hàng chứa 2 sản phẩm 1", async () => {
            //Step 2: Thêm sản phẩm 1: 2 sản phẩm
            await page.locator("[data-product-id='1']").click();
            await page.locator("[data-product-id='1']").click();
            // kiểm tra giỏ hàng chứa 2 sản phẩm 1"
            await expect(page.locator ("#cart-items")).toContainText("Product 1");
            await expect (page.locator("#cart-items tr td:nth-child(3)")).toHaveText('2');
        });

    }); // đóng Test 2

}); // đóng test.describe