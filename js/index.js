$(".img-title").click(function(e){
    let src= $(e.target).attr('src');//getter
    $(".main-img").attr('src',src);//setter
})
// import { newUsers } from "./WorkModule.js";
// console.log(newUsers);
// import { anotherUser } from "./WorkModule.js";
// console.log(anotherUser);

