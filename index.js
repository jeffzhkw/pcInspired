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
    result = d * relativePos * 3 + 1
    return result
}

function updateStyle(){
    
    scaleX(horizontals[0], 4) //what elem, what rate
    scaleX(horizontals[1], 1)
    scaleX(horizontals[2], 0.3)
    scaleX(horizontals[3], 0.8)
    scaleX(horizontals[4], 8)

    scaleY(verticals[0], 0.35)
    scaleY(verticals[1], 1.1)
    scaleY(verticals[2], 0.8) //what elem, what rate
    scaleY(verticals[3], 3)
    scaleY(verticals[4], 0.25)
    scaleY(verticals[5], 6)

    scaleBoth(boths[0], 0.1, 0.4)
    scaleBoth(boths[1], 0.3, 0.3)
    scaleBoth(boths[2], -0.05, -0.05)


    

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
