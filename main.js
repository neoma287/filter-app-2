

nose_x = 0;
nose_y = 0;
function preload(){
clown_nose = loadImage('https://www.pngitem.com/pimgs/m/111-1112184_lipstick-png-picture-huda-beauty-demi-matte-lady.png');
}
function setup(){
    canvas =createCanvas(400,400);
    canvas.center();
video = createCapture(VIDEO);
video.size(400 , 400);
video.hide()
poseNet=ml5.poseNet(video , modelloaded);
poseNet.on('pose' , got_poses);
}
function draw(){
image(video,0,0, 400 , 400);


image (lipstick, mouth_x , mouth_y , 30 , 30);
}
function take_snapshot(){
    save('lipstick.png')
}
function modelloaded(){
    console.log("poseNet is initialized")
}
function got_poses(results){
    if(results.length>0)
{
    console.log(results);
    nose_x =results[0].pose.mouth.x;
    nose_y=results[0].pose.mouth.y;
    console.log ("mouth_x = " + mouth_x);
    console.log("mouth_y = " + mouth_y);
}
}

