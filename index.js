var total;
var relativePos;
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
    
}