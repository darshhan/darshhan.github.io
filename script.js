function changeBg(){
    var nav = document.getElementById("navbar");
    var scroll = window.scrollY;
    

    if(scroll > 50){
        nav.classList.add("one");
    }
    else{
        nav.classList.remove("one");
    }

    console.log(scroll);
}

window.addEventListener('scroll', changeBg);