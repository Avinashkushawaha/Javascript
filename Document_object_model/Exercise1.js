
document.addEventListener("DOMContentLoaded",function(){

let a = document.getElementsByTagName('img');
        console.log(a);
        a[0].src = "https://th.bing.com/th/id/OIP.MY_uGxenwQLMznv_pgS-UQHaHa?rs=1&pid=ImgDetMain";

        let bold = document.querySelector(".b1");
        console.log(bold);
        bold.innerHTML = "This is a new paragraph";  
        bold.style.fontSize = "40px";  
        let para = document.querySelectorAll('p');
        console.log(para);
        para[0].innerText = "This is a new paragraph";  

        let btn = document.querySelector('button');
        let page = document.body;  
        page.style.transition = "1s";  

        function change() {
            if (page.style.backgroundColor !== "black") {
                page.style.backgroundColor = "black";  
                page.style.color = 'white';  
            } else {
                page.style.backgroundColor = 'white';  
                page.style.color = "black";  
            }
        }

        btn.addEventListener('click', change);
    });