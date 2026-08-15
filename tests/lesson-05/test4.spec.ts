import { test, expect } from '@playwright/test';

test (("Them moi 10 note"), async({page})=> {

    // Truy cap vao trang 
    await page. goto("https://material.playwrightvn.com/");
    //click vào “Bài học 4: Personal notes
    await page.getByText("Bài học 4: Personal notes").click();
    //Thêm mới 10 note với nội dung
     //khai bao 1 mang notes gom title va content
    const notes=[
        {title:"Action 1", content:"content1"},
        {title:"Action 2", content:"content2"},
        {title:"Action 3", content:"content3"},
        {title:"Action 4", content:"content4"},
        {title:"Action 5", content:"content5"},
        {title:"Action 6", content:"content6"},
        {title:"Action 7", content:"content7"},
        {title:"Action 8", content:"content8"},
        {title:"Action 9", content:"content9"},
        {title:"Action 10", content:"content10"}
    ];
    //lay tung phan tu trong notes de gan vao note
      for (const note of notes){
        await page.locator('#note-title').fill(note.title);
        await page.locator('#note-content').fill(note.content);
        await page.locator('#add-note').click();
      }
      //kiem tra xem da co du 10 note duoc them chua
      await expect(page.locator('#note-count')).toHaveText('Total Notes: 10')
      // search voi keyword "mot hoac nhieu"
      await page.locator('#search').fill("mot hoac nhieu");
      //kiem tra ket qua search 
      await expect(page.locator('#notes-list')).toContainText("mot hoac nhieu")
})