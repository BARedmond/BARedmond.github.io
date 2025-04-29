/*Creating javascript objects from the html elements*/
/*Should probably rename a lot of them*/ 
const picture = document.querySelector('#picture');
const container4 = document.querySelector('.container4');
const container3 = document.querySelector('.container3');
const nav = document.querySelector('.container6');
const quote = document.querySelector('.container5');
const sidequote = document.querySelector('#sidequote');
const resume = document.querySelector('#resume');
const sideform = document.querySelector('#sideform');
const sidebar = document.querySelector('.container7');
const container8 = document.querySelector('.container8');
const footer = document.querySelector('.container9'); 
const menuBars = document.querySelector('.menu-bars');
const container10 = document.querySelector('.container10');
const screenSize = document.querySelector('.screenSize'); 
const flag = document.querySelector('#flag'); 
const topName = document.createElement('div');
topName.classList.add('topName');
topName.textContent = 'Bryce Redmond';
const headerList = document.querySelector('#header-list');
/*sticky is equal to the height of the container of the quote at the top of the screen*/
const sticky = quote.offsetHeight;

/*When the page is scrolled, it calls the function that applies the sticky to the header*/
window.onscroll = function () {
    scrollFunction()
};

/*When the window is resized, it calls the function that changes the layout if small enough*/
window.onresize = function () {
    resizeFunction()
};

/*I should take a second look at this and maybe try to turn it into a function*/
/*if (window.innerWidth < 550) {*/
/*Small Screen*/
if (getComputedStyle(screenSize).backgroundColor == "rgb(2, 2, 2)") {
    nav.removeChild(headerList);
    menuBars.style.display = "block";
    nav.prepend(topName);
    footer.prepend(sideform);
    footer.prepend(resume);
    resume.classList.add("smallScreenSideform");
    sideform.classList.add("smallScreenSideform"); 
}
/*Medium Screen*/
if (getComputedStyle(screenSize).backgroundColor == "rgb(1, 1, 1)") {
    nav.prepend(topName);
    footer.prepend(sideform);
    footer.prepend(resume);
    resume.classList.add("smallScreenSideform");
    sideform.classList.add("smallScreenSideform");
}

/*Function run when the page is scrolled*/
function scrollFunction() {
    /*if the page has been scrolled to the point where the top of the navbar is at the top of the screen*/
    if (window.pageYOffset > (container4.offsetHeight - nav.offsetHeight)) {
        /*Fixes the position of the header and adds a box shadow*/
        nav.classList.add("sticky-header");
        /*The navbar now expands across the entire screen. Should probably change to be in Class form*/
        container4.style.width = "100%";
        /*Only move the quote to the sidepanel if the height is greater than this value*/
        if (window.innerHeight > 650) {
            /*Defines the width and font size of the quote when moved to the sidepanel*/
            /*sidequote.classList.add("sticky-sidepanel");
            /*Quote is now a child of the sidepanel*/
            /*container10.prepend(sidequote);*/
            flag.style.display = "block";
            container10.style.paddingTop = "80px"; 
        }
        if (getComputedStyle(screenSize).backgroundColor == "rgb(0, 0, 0)") {
            nav.prepend(topName);
        }
    /*Properties are removed when the scroll is no longer > quote container*/
    } else {
        nav.classList.remove("sticky-header");
        container4.style.removeProperty("width");
        /*sidequote.classList.remove("sticky-sidepanel");
        sideform.classList.remove("sticky-sidepanel"); 
        quote.appendChild(sidequote);*/
        flag.style.display = "none";
        container10.style.paddingTop = "180px"; 
        /*Max screen width*/
        if (getComputedStyle(screenSize).backgroundColor == "rgb(0, 0, 0)") {
            nav.removeChild(topName);
            /*container10.removeChild(sidequote);*/
        }
        
    }
};

function resizeFunction() {
    /*@media query toggled visibility of blank element to signal when the width < threshold*/
    /*Medium Screen*/
    if (getComputedStyle(screenSize).backgroundColor == "rgb(1, 1, 1)") {
        /*Turns nav bar into 3 menu bars and adds name in top left*/        
        nav.prepend(topName);
        menuBars.style.display = "none";
        nav.appendChild(headerList);
        footer.prepend(sideform);
        footer.prepend(resume);
        resume.classList.add("smallScreenSideform");
        sideform.classList.add("smallScreenSideform");  
    /*Small Screen*/
    } else if (getComputedStyle(screenSize).backgroundColor == "rgb(2, 2, 2)") {
        /*Turns nav bar into 3 menu bars and adds name in top left*/
        nav.removeChild(headerList);
        menuBars.style.display = "block";
        nav.prepend(topName);
        footer.prepend(sideform);
        footer.prepend(resume);
        resume.classList.add("smallScreenSideform");
        sideform.classList.add("smallScreenSideform"); 
    /*Removes properties if the width is not less than threshold*/
    /*Large Screen*/
    } else {
        nav.appendChild(headerList);
        menuBars.style.display = "none";
        nav.removeChild(topName);
        footer.removeChild(resume);
        footer.removeChild(sideform);
        resume.classList.remove("smallScreenSideform");
        sideform.classList.remove("smallScreenSideform");
        container10.appendChild(resume);   
        container10.appendChild(sideform); 

    }
}

/*Called with menu bars button is clicked*/
function getMenu() {
    /*Is the menu tray currently pulled out?*/
    if (!menuBars.classList.contains("menuBarsToggle")) {
        /*Shows the options*/
        nav.appendChild(headerList);
        /*Adds menuBarsToggle telling that the tray is currently pulled out.*/
        menuBars.classList.add("menuBarsToggle")
        /*Tells menu options to display as a column instead of original row*/
        headerList.classList.add("headerListToggle");
        nav.style.flexDirection = "column";
    /*Removes properties if button clicked and tray is currently out (Closes tray)*/
    } else {
        menuBars.classList.remove("menuBarsToggle");
        nav.removeChild(headerList);
        nav.style.flexDirection = "row";
        headerList.classList.remove("headerListToggle");
    }
}

function revealText(img) {
    var text = img.firstElementChild; 
    text.classList.add("pictureGridHover");
}

function hideText(img) {
    var text = img.firstElementChild; 
    text.classList.remove("pictureGridHover");
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}