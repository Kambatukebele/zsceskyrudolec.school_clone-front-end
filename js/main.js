/*
======================================================================== HIDDEN MENU====================================================
===============================================
*/

let scrollPos = 0;
const navVisible = document.querySelector('.logo__menu_block');
const hiddenNav = document.querySelector('.hidden__menu');
const menuIcons = document.querySelector('.header__icons__all');




 function checkPosition(){
    // const scrollable = document.documentElement.scrollHeight;
    const windowY = window.scrollY;
    console.log(windowY );
    // console.log(scrollable);
   
    if (windowY >300){
    //scrolling up
    hiddenNav.classList.add('visible');
    navVisible.classList.add('hideit');
    menuIcons.classList.add('hideit');

    
    }else{
//     // //     //scrolling down
    navVisible.classList.remove('hideit');
    menuIcons.classList.remove('hideit');
    hiddenNav.classList.remove('visible');
    }
 scrollPos = windowY;
}

 window.addEventListener('scroll', checkPosition);

 /*
======================================================================== HIDDEN SECCOND MENU====================================================
===============================================
*/




function checkMenu(){
    const the_second_menu = document.body.classList.contains('the__display');
    const headerAll = document.getElementsByClassName('header__all')[0];
    const otherMenu = document.getElementsByClassName('another_menu')[0];
    console.log(headerAll);
    console.log(the_second_menu);
    if(the_second_menu){
        console.log('body has it');
        headerAll.style.display = "none";
        otherMenu.style.display = "block";
    }else{
        console.log('body does not have it');
        headerAll.style.display = "block";
        otherMenu.style.display = "none";
    }
}
window.onload = function (){
    checkMenu();
}

 /*
======================================================================== hover container====================================================
===============================================
*/
 
// const box__container = document.getElementsByClassName('box__text')[0];
// const boxContainer = document.getElementsByClassName('box-container')[0];
// console.log(boxContainer);
// const secondContainerBc = document.getElementsByClassName('second-container')[0];
// const secondBox = document.getElementById('second_second');



// // ======= On Mouse Over

// boxContainer.addEventListener("mouseover", function(e){
//     secondBox.classList.add('second-box');
//     secondContainerBc.classList.add('second_container_bc');
// })



// //on Mouse Out
// boxContainer.addEventListener("mouseout", function(e){
//     secondBox.classList.remove('second-box');
//     secondContainerBc.classList.remove('second_container_bc');
// })