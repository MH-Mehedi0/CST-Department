//<!-- Toggle Menu-------->
    
        var navLinks = document.getElementById("navLinks");
        
        function showMenu(){
            navLinks.style.right = "0";
        }
        
        function hideMenu(){
            navLinks.style.right = "-200px";
        }
   
//Typed Function

$(function(){
    $(".typed").typed({
        strings: ["মনোরম পরিবেশ। ", " আধুনিক কম্পিউটার লেব। ", "উন্নত মানের সফটওয়্যার লেব। ","উন্নত মানের নেটওয়ার্ক  লেব। ","উন্নত মানের হার্ডওয়্যার লেব। ", "স্কিল্ড শিক্ষক মন্ডলি। ", "সিসি কেমেরার আউতায় পর্যবেক্ষণ। "],
        loop: true,
        startDelay: 500,
        typeSpeed: 80,
        backDelay: 1000,
        backSpeed:80,
        showCursor: true
        
        
    })
})
    