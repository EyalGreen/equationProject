$(document).ready(function () {
    widthCont = $('.equ').width();
    widthScreen = $(document).width();
    heightScree = $(document).height()
    widthAnswer = $('p').width();
    $('button').css("left", widthCont / 4+"px")
    $('p').css("left",widthCont / 4 - (widthAnswer / 6)+"px" )
    $('.equ').css("left",widthScreen / 2 - 900+ "px")
    $('.equ').css("top", heightScree / 2  -150 + "px");
})

function solve() {
    equ = document.getElementById("equ").value;
    varible;
    for(let i = 0; i < equ.length; i++){
        if ( equ[i].match(/[a-z]/i)) {
            varible = equ[i];
            break;
        }
    }
    answer = check(equ, varible)
    console.log("x = " + answer);
    $('p').text(`${varible} = ${answer}`)
    
}