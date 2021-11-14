function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    circle(30, 30, 20)
ellipse(56, 46, 55, 55);
rect(30, 20, 55, 55);
}
function take_snapshot(){
    save('student_name.png');
}
function apply_filter(){
    tint_color = document.getElementById("color_name").value;
}
function preload(){

}