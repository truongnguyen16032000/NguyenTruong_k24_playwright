import { test, expect } from '@playwright/test';

test(("Add 100 to do"), async ({page})=>{
    // truy cap trang 
await page.goto ("https://material.playwrightvn.com/");
    //click vào “Bài học 3: Todo page”
await page.getByText("Bài học 3: Todo page").click();
//Thêm mới 100 todo item có nội dung “Todo <i>”
for ( let i=0;i<=100;i++){
  await page.locator('#new-task').fill(`Todo ${i}`);
  await page.locator('#add-task').click();
}
// Xác nhận Xóa ở dialog Are you sure you want to delete this task
page.on('dialog', async dialog => {
  await dialog.accept();
});
// Xoá các todo có số lẻ
for (let i = 1; i <= 100; i += 2) {
  await page.locator(`#todo-${i}-delete`).click();
}
})