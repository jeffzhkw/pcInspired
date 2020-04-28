var total;
var relativePos;
var shift = document.getElementsByClassName("shift")[0]
var bottom = document.getElementsByClassName("bottom")[0]
console.log(shift)

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
    result = d * relativePos * 10
    return result
}

function updateStyle(){
    scaleX(shift, 5)//what elem on what rate
    scaleY(bottom,3)
    //shift.style.transform = "scaleX("+calcChange(5)+")";

}


function scaleX(target, d){
    target.style.transform = "scaleX("+calcChange(d)+")";
}

function scaleY(target, d){
    target.style.transform = "scaleY("+calcChange(d)+")";
}
