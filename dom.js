let windows = [];

document.getElementById("btnImages").addEventListener("click", function() {
    let imgWindow = window.open("", "Images", "width=400,height=400");
    imgWindow.document.write("<h1>Images</h1>");
  
    
    imgWindow.document.write("<img src='https://via.placeholder.com/100' alt='Image 3'>");
    imgWindow.document.write("<img src='https://via.placeholder.com/100' alt='Image 4'>");
    windows.push(imgWindow);
});

document.getElementById("btnTables").addEventListener("click", function() {
    let tableWindow = window.open("", "Tables", "width=400,height=400");
    tableWindow.document.write("<h1>Student Table</h1>");
    tableWindow.document.write("<table border='1'><tr><th>Name</th><th>Roll No</th><th>Branch</th></tr>");
    tableWindow.document.write("<tr><td>Alice</td><td>101</td><td>CSE</td></tr>");
    tableWindow.document.write("<tr><td>Bob</td><td>102</td><td>ECE</td></tr>");
    tableWindow.document.write("<tr><td>Charlie</td><td>103</td><td>ME</td></tr>");
    tableWindow.document.write("</table>");
    windows.push(tableWindow);
});

document.getElementById("btnLists").addEventListener("click", function() {
    let listWindow = window.open("", "Lists", "width=400,height=400");
    listWindow.document.write("<h1>Branch List</h1>");
    listWindow.document.write("<ul>");
    listWindow.document.write("<li>CSE</li>");
    listWindow.document.write("<li>ECE</li>");
    listWindow.document.write("<li>ME</li>");
    listWindow.document.write("<li>SWE</li>");
    listWindow.document.write("</ul>");
    windows.push(listWindow);
});

document.getElementById("btnClose").addEventListener("click", function() {
    windows.forEach(win => win.close()); 
    window.close(); 
});
