1, DOM (Document object model)
- cấu trúc của 1 node gồm: 
+ thẻ/tag đóng , mở 
+ thuộc tính
+ giá trị của thuộc tính 
+ text 
vd : <button id="add-task">Add Task</button>
+ thẻ/tag đóng , mở : thẻ button
+ thuộc tính : id
+ giá trị của thuộc tính : add-task
+ text : Add Task
- Một số thẻ của thuộc tính : 
+ <html>:Thẻ gốc của trang 
+ <head>: chứa metadata: tiêu đề website, hiển thị google
+ <body>: Nội dung hiển thị của cả website
+ <div>: Khối/container chung
+ <span>:inline container
+ <header>, <footer>,<nav>,<section>:thẻ ngữ nghĩa
+ <h1>: tiêu đề
+ <p>: Đoạn văn
+ <a>: liên kết
+<li>,<ol>,<ul>: Danh sách
2, Selector
+ Xpath:
  + Xpath tuyệt đối
    bat dau =1/
  + Xpath tuơng đối ( nên dùng)
     //tenthe[@thuoctinh='giatri]
     vd: //button[@id='add-task']
+ Playwright basic
- test:
   test ("ten test"), asyn ({page})=>{
   // code của test
   }
- steps: đơn vị nhỏ hơn test, dùng để khai báo từng steps của testcase
await test.step("ten step", asyn()=> {
    // code cua step
});
- navigate
 await page.goto ("url page);
- Locate
  sử dụng page.locator("<selector>") để chọn phần tử trên trang 
- click 
 + single click 
 await page.locator (//buton).click();
 + double click
 await page.locator (//buton).dbclick();
 + click chuột phải
 await page.locator (//buton).click({
    button:'right'
 });
 - input
 + locator + fill(value)
 - radio
 + locator + check()
 - checkbox : 
    + checked:locator + check()
    + uncheck:locator + uncheck()
- select 
  locator + selectOption(value)
- upload
 locator + setInputFiles(file)

