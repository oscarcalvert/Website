/* note: none of this was coded by me */

if(screen.width > 720) { 
    
        window.addEventListener
    ("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0)
        });
        
}