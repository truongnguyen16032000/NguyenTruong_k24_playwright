import { test, expect } from '@playwright/test';

test (("Register page"), async({page})=> {
    //1. Truy cập trang 
    await page.goto("https://material.playwrightvn.com/")
    //2. Click bai hoc 
    await page.getByText("Bài học 1: Register Page (có đủ các element)").click()
    //3.nhap user name
    await page.locator ("#username").fill ("nguyentruong");
    //4.Nhap emain
    await page.locator ("#email").fill ("nguyentruong@gmail.com");
    //5. Chọn gender
    await page.locator ("#male").check();
    //6. chọn Hobbies
    await page .locator ('#reading').check ();
    await page .locator ('#cooking').check ();
    //7. chọn  Interests
    await page.locator ('#interests').selectOption (["music", "sports"]);
    //8 . chọn country
    await page.locator ('#country').selectOption ("usa");
    //9.nhap date of birth
    await page.locator ('#dob').fill ("2000-03-16");
    //10 upload file
    await page.locator ('#profile').setInputFiles ("tests/lesson-05/avatar.jpg");
    //11.nhap Biography
    await page.locator ('#bio').fill ("Tôi là một người đam mê công nghệ và yêu thích lập trình. Tôi luôn tìm kiếm cơ hội để học hỏi và phát triển kỹ năng của mình trong lĩnh vực này.");
    //12. click btn register
    await page.locator ('button[type="submit"]').click();
}
)