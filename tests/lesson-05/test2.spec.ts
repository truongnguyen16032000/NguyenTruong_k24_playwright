import { test, expect } from '@playwright/test';
test ("Add product to cart", async({page})=>{
    //1. Truy cập trang
    await page.goto("https://material.playwrightvn.com/")
    //2 . Click bai hoc Bài học 2: Product page
    await page.getByText("Bài học 2: Product Page").click()
    //3. Thêm product 1 vào giỏ hàng 2 lần 
    await page.locator ('.add-to-cart[data-product-id="1"]').click();
    await page.locator ('.add-to-cart[data-product-id="1"]').click();
   //4 . Them product 2 vao gio hang 3 lan 
   await page.locator ('.add-to-cart[data-product-id="2"]').click();
   await page.locator ('.add-to-cart[data-product-id="2"]').click();
   await page.locator ('.add-to-cart[data-product-id="2"]').click();
   //5. them product 3 vao gio hang 1 lan 
   await page.locator ('.add-to-cart[data-product-id="3"]').click();
// 6.kiem tra so luong trong gio hang 

  await expect (page.locator ('#cart-items tr').nth(0)).toContainText('Product 1');
  await expect(page.locator('#cart-items tr').nth(0)).toContainText('2');

  await expect (page.locator('#cart-items tr').nth(1)).toContainText('Product 2');
  await expect ( page.locator ('#cart-items tr').nth(1)).toContainText('3');

  await expect (page.locator('#cart-items tr').nth(2)).toContainText('Product 3');
  await expect ( page.locator ('#cart-items tr').nth(2)).toContainText('1');
})