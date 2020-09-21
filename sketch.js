/*
Hi! here is an example sketch for Control Shfit website ✨magic✨!

some things to help:
- if you use this webeditor, use chrome as firefox is dodgy for images
- edit this or make your own 🤗
- please get this back to us by 28 August so we can integrate it into the site
- released under MIT License 
- based on code by Becca Rose for drawgramming https://www.beccarose.co.uk/code/drawgramming/

*/


//variables for image play 
var img = []; //set up array for images
let picNum = 18; // number of images
let randAngle1, randAngle2, randImg, randImg2, img1W, img1H, img2W, img2H; // random variables

function preload() {
  // load images
  for (var i = 1; i <= picNum; i++) {
    img[i] = loadImage('imgs/image' + i + '.png');
    console.log('imgs/image' + i + '.png');
  }
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(255, 255);
  noLoop(); // only run once, comment out for key-pressing
  imageMode(CENTER);
  imageSnap(); // run the image function

}

function draw() {
  // ctrlshiftKeys()
}


////////////////////////////
////////////////////////////
//function to make images //
////////////////////////////
////////////////////////////

function imageSnap() {

  background(7, 75, 221);

  //image randoms
  randAngle1 = ~~random(360);
  randAngle2 = ~~random(360);
  randImg1 = ~~random(1, picNum);
  randImg2 = ~~random(1, picNum);

  //make image 1
  push(); // Start a new drawing state
  translate((width / 2) - 300, (height / 2)); // move
  rotate(randAngle1); //rotate
  tint(0, 153, 204, ~~random(10, 100)); // Apply transparency
  image(img[randImg1], 0, 0, img1W, img1H);
  pop(); // Restore original state

  // make image 2
  push(); // Start a new drawing state
  translate(width / 2, (height / 2) - 10);
  rotate(randAngle2);
  tint(255, 255, 0, ~~random(10, 100)); // Apply transparency
  image(img[randImg2], 0, 0, img2W, img2H);
  pop(); // Restore original state

}

///////////////////////////////////////
///////////////////////////////////////
// press control shift magic happens //
///////////////////////////////////////
///////////////////////////////////////


// function ctrlshiftKeys() {
//   if (keyIsDown(17) && keyIsDown(16)) {
//     console.log("ctrl-shift");
//     background(125);
//   } else {
//     background(255);
//   }
// }


///////////////////////////////////////////////
///////////////////////////////////////////////
// CHANGE WEBSITE TITLE (on tab) DYNAMICALLY //
///////////////////////////////////////////////
///////////////////////////////////////////////

// const EMOJIS = [
//   'Control(╯°□°)╯︵┻━┻ Shift',
//   'Control(ヘ･_･)ヘ ┳━┳ ',

// ]
// setInterval(() => {
//     document.title = randomEmoji();
// }, 2000);

// function randomEmoji() {
//     let randIndex = Math.floor(Math.random() * EMOJIS.length);
//     return EMOJIS[randIndex];
// }