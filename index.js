var total;
var relativePos;
var horizontals = document.getElementsByClassName("horizontal")
var verticals = document.getElementsByClassName("vertical")
var boths = document.getElementsByClassName("both")

document.addEventListener('DOMContentLoaded', function(){
    console.log("loaded")
    total = document.body.offsetHeight-window.innerHeight
    relativePos = window.pageYOffset/total
    console.log(total)
})

window.addEventListener('resize',function(){
    console.log("resize!");
    total = document.body.offsetHeight-window.innerHeight
    relativePos = window.pageYOffset/total
    console.log(total)
})


window.onscroll = function() {
    relativePos = window.pageYOffset/total
    console.log('percentage', relativePos)
    updateStyle();
   
}


function calcChange(d){
    //calculate degree of translation
    // have a constant multiplyer d as param
    //from 1 to 10. 10 means shift 3 blocks at max
    result = d * relativePos * 3
    return result
}

function updateStyle(){
    
    scaleX(horizontals[0], 5) //what elem, what rate
    scaleX(horizontals[1], 2)
    scaleX(horizontals[2], 9)
    
    scaleY(verticals[0], 2) //what elem, what rate
    scaleY(verticals[1], 4)
    scaleY(verticals[2], 7)

    scaleBoth(boths[0], 0.7, 0.7)


    

}


function scaleX(target, d){
    target.style.transform = "scaleX("+calcChange(d)+")";
}

function scaleY(target, d){
    target.style.transform = "scaleY("+calcChange(d)+")";
}

function scaleBoth(target, dx, dy){
    target.style.transform = "scaleX("+calcChange(dx)+")";
    target.style.transform = target.style.transform + "scaleY("+calcChange(dy)+")";

}
