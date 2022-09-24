let i = 0;
let text = 'rintf("Hello, World!");';
let sec = 100;

function typing(){
    if(i<text.length){
        document.querySelector(".welcome").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, sec);
    }
    else if(i==text.length){
        i++;
        setTimeout(typing, sec*10);
    }
    else{
        document.querySelector(".welcome").innerHTML = "p"
        i = 0;
        setTimeout(typing, sec);
    }
}