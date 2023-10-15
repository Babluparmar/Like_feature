var con = document.querySelector(".container");
var love = document.querySelector("#loveimage");

con.addEventListener("dblclick",function(){
    love.style.transform= "scale(1)";
   
    setTimeout(function(){
        love.style.transform= "scale(0)";
    },2000)
});