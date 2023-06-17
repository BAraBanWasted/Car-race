let d1 = document.getElementById('d1')
let sled1 = document.getElementById('sled1')
let sled2 = document.getElementById('sled2')
let green = document.getElementById('green')
let black = document.getElementById('black')
let red = document.getElementById('red')
let oran = document.getElementById('oran')
let speed = document.getElementById('speed')
d1.onmouseenter = f10
d1.onmousemove = f1
d1.onmouseleave = f2
let a = 8
function f1 (){
    a+=1
    let newW = String(a) + "px"
    sled1.style.width= newW
    sled2.style.width= newW
}
function f2 (){
    a=8
    let newW = String(a) + "px"
    sled1.style.width= newW
    sled2.style.width= newW
    d1.style.border = '0px'
}
green.onclick = f3
function f3 () {
    sled1.style.backgroundColor= "green"
    sled2.style.backgroundColor= "green"
}
red.onclick = f4
function f4 () {
    sled1.style.backgroundColor= "red"
    sled2.style.backgroundColor= "red"
}black.onclick = f5
function f5 () {
    sled1.style.backgroundColor= "black"
    sled2.style.backgroundColor= "black"
}oran.onclick = f6
function f6 () {
    sled1.style.backgroundColor= "orange"
    sled2.style.backgroundColor= "orange"
}

speed.onclick = f7
speed.onmouseenter = f8
speed.onmouseleave = f9
function f7 (){
    a+=12
    let newW = String(a) + "px"
    sled1.style.width= newW
    sled2.style.width= newW
}
function f8() {
    speed.style.border = '5px solid black'
}
function f9 (){
    speed.style.border = '0px'
}
function f10() {
    d1.style.border = '5px solid black'
}