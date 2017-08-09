$(document).ready(function(){
    
var running= false; 
var smode =false;
var memory=[];
var setColor=['blue','green','red','yellow']    
var click=[];
var match=0;
var count=0;
var i=0;    
var s1=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');    
var s2=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var s3=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var s4=new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
$('.strict').click(function(){
    smode=true;
});
    
$('.start').click(function(){
    running=true;
    game();
});
    
document.getElementById('color-0').onclick=function(){
        click.push('0');
        s1.play();
        console.log(click);
        if(click.length==memory.length)
            check();
}
document.getElementById('color-1').onclick=function(){
        click.push('1');
        s2.play();
        console.log(click);
        if(click.length==memory.length)
            check();
}
document.getElementById('color-2').onclick=function(){
        click.push('2');
        s3.play();
        console.log(click);
        if(click.length==memory.length)
            check();
}
document.getElementById('color-3').onclick=function(){
        click.push('3');
        s4.play();
        console.log(click);
        if(click.length==memory.length)
            check();
}
//*****Starter****//
game();
//****Ender****//

function game(){
    if(running==true && smode==false){
        if(count<20)
            playgame();
        else{
            console.log('won the game');
            reset();}
    }
    if(running==true && smode==true){
        playgame();    
    }
}

function check(){
    console.log('uo');
    var ll = (memory.length == click.length) && memory.every(function(element, index) {
    return element === click[index]; 
});
    console.log(ll);
    if(ll==true && smode==false){
        console.log('won');
        count++;
        $('.counter').html(count);
        game();
    }
    else if(ll==true && smode==true){
        console.log('won');
        count++;
        $('.counter').html(count);
        game();
    }
    else if(ll==false && smode==true){
        alert('You lost. Press start to play again');
        count=0;
        $('.counter').html(count);
        reset();
        game();
    }
    else{
        alert('try again');
        playgame();
    }
}
function playgame(){
    click=[];
    console.log('entered');
    for(i=0;i<=count;i++){
        var x=(Math.random()*3).toFixed();
        memory[i]=x;
        }
        var z=0;
        myLoop();
        function myLoop(){
            setTimeout(function () {
            //console.log(z);
            changer(memory[z]);          
                z++;                         
                if (z < memory.length) {         
                myLoop();                     
                }    
            },1000);
        }
        //match=setColor[x];
        console.log(memory);
}    
function changer(x){
    if(x==0)
    s1.play();
    if(x==1)
    s2.play();
    if(x==2)
    s3.play();
    if(x==3)
    s4.play();
    $('.color-'+x).fadeTo(500, 0.15).fadeTo(500,1);    
}
function reset(){
    running= false; 
    smode =false;
    memory=[];
    setColor=['blue','green','red','yellow']    
    click=[];
    count=0;
    z=0;
    //console.log('Won the game,press start to play again');
}
    
});