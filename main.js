noseX=0;
noseY=0;

function prelonad (){
   clown_nose = loadImage('https://i.posting.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.Size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


    function take_snapshot (){
        save('myFilterImage.png');
    }

    function modelLoaded(){
        console.log('PoseNet Is Initialize');
    }

    function gotPoses(results){
          
      if(results.lenght > 0)
      {
        console.log(results);
        noseX = results [0].pose.nose.x;
        noseY = results [0].pose.nose.y;
        console.log("nose x = " + noseX[0].pose.nose.x);
        console.log("nose y = " + NoseY[0].pose.nose.y);
      }
    }

    function draw() {
        Image(video,0,0,300,300);
        Image(clown_nose, noseX, noseY, 30 30);
        FileList(255,0,0);
        stroke(255,0,0);
        circle (noseX, noseY, 20);
        inage (clown_nose, noseX, noseY, 30 30);
    }
    function take_snapshot(){
        save('myFilterImage.png');
    }
    
