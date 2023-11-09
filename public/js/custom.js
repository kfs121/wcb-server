const $hamBtn = document.querySelector(".ham-btn");
const $mainMenu = document.querySelector("#main-menu");

let isShowMenu = false;

$hamBtn.addEventListener("click", ()=>{
  if(!isShowMenu){
    $mainMenu.style.right = 0;
    isShowMenu = true;
  }else{
    $mainMenu.style.right = -60 + "%";
    isShowMenu = false;
  }
})