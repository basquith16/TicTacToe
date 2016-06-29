// // Create an array to store our particles
// var particles = [];
//
// // The amount of particles to render
// var particleCount = 160;
//
// // The maximum velocity in each direction
// var maxVelocity = 1;
//
// // The target frames per second (how often do we want to update / redraw the scene)
// var targetFPS = 60;
//
// // Set the dimensions of the canvas as variables so they can be used.
// var canvasWidth = 1680;
// var canvasHeight = 200;
//
// // Create an image object (only need one instance)
// var imageObj = new Image();
//
// // Once the image has been downloaded then set the image on all of the particles
// imageObj.onload = function() {
//     particles.forEach(function(particle) {
//             particle.setImage(imageObj);
//     });
// };
//
// // Once the callback is arranged then set the source of the image
// imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";
//
// // A function to create a particle object.
// function Particle(context) {
//
//     // Set the initial x and y positions
//     this.x = 0;
//     this.y = 0;
//
//     // Set the initial velocity
//     this.xVelocity = 0;
//     this.yVelocity = 0;
//
//     // Set the radius
//     this.radius = 5;
//
//     // Store the context which will be used to draw the particle
//     this.context = context;
//
//     // The function to draw the particle on the canvas.
//     this.draw = function() {
//
//         // If an image is set draw it
//         if(this.image){
//             this.context.drawImage(this.image, this.x-128, this.y-128);
//             // If the image is being rendered do not draw the circle so break out of the draw function
//             return;
//         }
//         // Draw the circle as before, with the addition of using the position and the radius from this object.
//         this.context.beginPath();
//         this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//         this.context.fillStyle = "rgba(0, 255, 255, 1)";
//         this.context.fill();
//         this.context.closePath();
//     };
//
//     // Update the particle.
//     this.update = function() {
//         // Update the position of the particle with the addition of the velocity.
//         this.x += this.xVelocity;
//         this.y += this.yVelocity;
//
//         // Check if has crossed the right edge
//         if (this.x >= canvasWidth) {
//             this.xVelocity = -this.xVelocity;
//             this.x = canvasWidth;
//         }
//         // Check if has crossed the left edge
//         else if (this.x <= 0) {
//             this.xVelocity = -this.xVelocity;
//             this.x = 0;
//         }
//
//         // Check if has crossed the bottom edge
//         if (this.y >= canvasHeight) {
//             this.yVelocity = -this.yVelocity;
//             this.y = canvasHeight;
//         }
//
//         // Check if has crossed the top edge
//         else if (this.y <= 0) {
//             this.yVelocity = -this.yVelocity;
//             this.y = 0;
//         }
//     };
//
//     // A function to set the position of the particle.
//     this.setPosition = function(x, y) {
//         this.x = x;
//         this.y = y;
//     };
//
//     // Function to set the velocity.
//     this.setVelocity = function(x, y) {
//         this.xVelocity = x;
//         this.yVelocity = y;
//     };
//
//     this.setImage = function(image){
//         this.image = image;
//     }
// }
//
// // A function to generate a random number between 2 values
// function generateRandom(min, max){
//     return Math.random() * (max - min) + min;
// }
//
// // The canvas context if it is defined.
// var context;
//
// // Initialise the scene and set the context if possible
// function init() {
//     var canvas = document.getElementById('myCanvas');
//     if (canvas.getContext) {
//
//         // Set the context variable so it can be re-used
//         context = canvas.getContext('2d');
//
//         // Create the particles and set their initial positions and velocities
//         for(var i=0; i < particleCount; ++i){
//             var particle = new Particle(context);
//
//             // Set the position to be inside the canvas bounds
//             particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));
//
//             // Set the initial velocity to be either random and either negative or positive
//             particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
//             particles.push(particle);
//         }
//     }
//     else {
//         alert("Please use a modern browser");
//     }
// }
//
// // The function to draw the scene
// function draw() {
//     // Clear the drawing surface and fill it with a black background
//     context.fillStyle = "rgba(0, 0, 0, 0.5)";
//     context.fillRect(0, 0, 1680, 330);
//
//     // Go through all of the particles and draw them.
//     particles.forEach(function(particle) {
//         particle.draw();
//     });
// }
//
// // Update the scene
// function update() {
//     particles.forEach(function(particle) {
//         particle.update();
//     });
// }
//
// // Initialize the scene
// init();
//
// // If the context is set then we can draw the scene (if not then the browser does not support canvas)
// if (context) {
//     setInterval(function() {
//         // Update the scene befoe drawing
//         update();
//
//         // Draw the scene
//         draw();
//     }, 1000 / targetFPS);
// }
//
//
//
// /*=============================================================================*/
// /* Canvas Lightning v1
// /*=============================================================================*/
// var canvasLightning = function(c, cw, ch){
//
// /*=============================================================================*/
// /* Initialize
// /*=============================================================================*/
//   this.init = function(){
//     this.loop();
//   };
//
// /*=============================================================================*/
// /* Variables
// /*=============================================================================*/
//   var _this = this;
//   this.c = c;
//   this.ctx = c.getContext('2d');
//   this.cw = cw;
//   this.ch = ch;
//   this.mx = 0;
//   this.my = 0;
//
//   this.lightning = [];
//   this.lightTimeCurrent = 0;
//   this.lightTimeTotal = 50;
//
// /*=============================================================================*/
// /* Utility Functions
// /*=============================================================================*/
// this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
// this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
//
//
// /* Clear Canvas
// /*=============================================================================*/
//     this.clearCanvas = function(){
//       this.ctx.globalCompositeOperation = 'destination-out';
//       this.ctx.fillStyle = 'rgba(0,0,0,'+this.rand(1, 15)/150+')';
//       this.ctx.fillRect(0,0,this.cw,this.ch);
//       this.ctx.globalCompositeOperation = 'source-over';
//     };
//
// /*=============================================================================*/
// /* Resize on Canvas on Window Resize
// /*=============================================================================*/
// // $(window).on('resize', function(){
// //   _this.cw = _this.c.width = window.innerWidth;
// //   _this.ch = _this.c.height = window.innerHeight;
// // });
//
// /*=============================================================================*/
// /* Animation Loop
// /*=============================================================================*/
//   this.loop = function(){
//         var loopIt = function(){
//       requestAnimationFrame(loopIt, _this.c);
//       _this.clearCanvas();
//       // _this.updateL();
//       // _this.lightningTimer();
//       // _this.renderL();
//     };
//     loopIt();
//   };
//
// };
//
// /*=============================================================================*/
// /* Check Canvas Support
// /*=============================================================================*/
// var isCanvasSupported = function(){
//   var elem = document.createElement('canvas');
//   return !!(elem.getContext && elem.getContext('2d'));
// };
//
// /*=============================================================================*/
// /* Setup requestAnimationFrame
// /*=============================================================================*/
// var setupRAF = function(){
//   var lastTime = 0;
//   var vendors = ['ms', 'moz', 'webkit', 'o'];
//   for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
//     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
//   };
//
//   if(!window.requestAnimationFrame){
//     window.requestAnimationFrame = function(callback, element){
//       var currTime = new Date().getTime();
//       var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//       var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
//       lastTime = currTime + timeToCall;
//       return id;
//     };
//   };
//
//   if (!window.cancelAnimationFrame){
//     window.cancelAnimationFrame = function(id){
//       clearTimeout(id);
//     };
//   };
// };
//
// /*=============================================================================*/
// /* Define Canvas and Initialize
// /*=============================================================================*/
// $(window).load(function(){
//   if(isCanvasSupported){
//     var c = document.getElementById('myCanvas');
//     var cw = c.width = window.innerWidth;
//     var ch = c.height = window.innerHeight;
//     var cl = new canvasLightning(c, cw, ch);
//
//     setupRAF();
//     cl.init();
//   }
// });

//init scrollMagic
var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: '#trigger1'
})
.setClassToggle("body", 'backgroundChange')
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '#trigger2'
})
.setClassToggle("#growingTitle", 'growingText')
.addTo(controller);

// var backgroundChange = new TweenMax.to('body', 3, {
//   backgroundColor: 'yellow'
// });
//
// .setTween(backgroundChange)
// .addIndicators()
// .addTo(controller);
