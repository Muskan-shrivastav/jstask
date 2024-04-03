function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++){
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeBackground(){
    var random = getRandomColor();
    document.body.style.backgroundColor = random;
}

document.addEventListener('DOMContentLoaded',function(){
    document.addEventListener("click",changeBackground);
})