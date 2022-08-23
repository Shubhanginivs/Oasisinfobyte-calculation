let screen = document.getElementById('screen');

function input(x){
    screen.value=screen.value+x;
}


function del(){
    screen.value=screen.value.slice(0,-1);
}


function al(){
    screen.value=' ';
}


function calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch{
        screen.value="Error";
    }
}