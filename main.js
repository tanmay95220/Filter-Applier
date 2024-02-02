usercolor=""
function preload(){
}

function setup(){
canvas=createCanvas(400,400)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,0,0,400,400)
tint(usercolor)
}

function apply_filter(){
    usercolor=document.getElementById("text1").value
}

function take_snapshot() {
save("downloads.jpg") 
}