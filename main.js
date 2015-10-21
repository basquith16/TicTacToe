//Global Variables
var xyphonoid = $('#X');
var ovaria = $('#O');
var draggableO = $('.draggableO');
var draggableX = $('.draggableX');
var droppable = $('.droppable');
var xTurn = true;
var oTurn = false;
var player1 = '';
var player2 = '';

//Created object Planet with two elements dictating whether the planet(square) has been played and if it is an X or O
function Planet(controlled, byWho) {
  this.controlled = controlled;
  this.byWho = byWho;
}
// Created the planets as new objects assigning that they are not occupied and have been played by no one.
var mars = new Planet(false, "");
var uranus = new Planet(false, "");
var earth = new Planet(false, "");
var neptune = new Planet(false, "");
var saturn = new Planet(false, "");
var theSun = new Planet(false, "");
var mercury = new Planet(false, "");
var venus = new Planet(false, "");
var jupiter = new Planet(false, "");

//A function determining who won the game. If three consecutive planets(squares are occupied by X or O, they win the game.
var win = function() {
  if ((earth.byWho === 'xyphonoid') && (uranus.byWho === 'xyphonoid') && (mars.byWho === 'xyphonoid') ||
    (earth.byWho === 'xyphonoid') && (neptune.byWho === 'xyphonoid') && (mercury.byWho === 'xyphonoid') ||
    (neptune.byWho === 'xyphonoid') && (theSun.byWho === 'xyphonoid') && (venus.byWho === 'xyphonoid') ||
    (mars.byWho === 'xyphonoid') && (venus.byWho === 'xyphonoid') && (jupiter.byWho === 'xyphonoid') ||
    (uranus.byWho === 'xyphonoid') && (theSun.byWho === 'xyphonoid') && (saturn.byWho === 'xyphonoid') ||
    (mars.byWho === 'xyphonoid') && (theSun.byWho === 'xyphonoid') && (mercury.byWho === 'xyphonoid') ||
    (mercury.byWho === 'xyphonoid') && (saturn.byWho === 'xyphonoid') && (jupiter.byWho === 'xyphonoid') ||
    (jupiter.byWho === 'xyphonoid') && (theSun.byWho === 'xyphonoid') && (earth.byWho === 'xyphonoid')) {

    alert("The Xyphonoids have gained control of the galaxy! Prepare for impending DOOM!")
    window.location.reload();

  } else if ((earth.byWho === 'ovaria') && (uranus.byWho === 'ovaria') && (mars.byWho === 'ovaria') ||
    (earth.byWho === 'ovaria') && (neptune.byWho === 'ovaria') && (mercury.byWho === 'ovaria') ||
    (neptune.byWho === 'ovaria') && (theSun.byWho === 'ovaria') && (venus.byWho === 'ovaria') ||
    (mars.byWho === 'ovaria') && (venus.byWho === 'ovaria') && (jupiter.byWho === 'ovaria') ||
    (uranus.byWho === 'ovaria') && (theSun.byWho === 'ovaria') && (saturn.byWho === 'ovaria') ||
    (mars.byWho === 'ovaria') && (theSun.byWho === 'ovaria') && (mercury.byWho === 'ovaria') ||
    (mercury.byWho === 'ovaria') && (saturn.byWho === 'ovaria') && (jupiter.byWho === 'ovaria') ||
    (jupiter.byWho === 'ovaria') && (theSun.byWho === 'ovaria') && (earth.byWho === 'ovaria')) {

    alert("The Ovarias have saved the galaxy from destruction! The Xyphonoids have retreated!")
    window.location.reload();
  }
    else if(earth.controlled && uranus.controlled && mars.controlled && neptune.controlled && mercury.controlled && theSun.controlled && venus.controlled && jupiter.controlled && saturn.controlled == true){
      alert("Both fleets are depleted and the fate of the galaxy is still up in the air! The battle is over but the war has just begun!")
      window.location.reload();
    }
};

function changeText(text) {
  $('#action').append(text)
}

function reset_text() {
  $('#action').empty()
}

function Pilots(name, fleet) {
  this.name = name;
  this.fleet = fleet;
}

$(function() {

  $(".draggableX").draggable();
  $(".draggableO").draggable();

  $('.droppable').droppable({
    drop: function(event, ui) {

      var action = $("#action");
      var current_square = $(this).attr("id");

      if (current_square === 'c1' && ui.draggable.hasClass("draggableO") && (earth.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/0cBHUU3.png');
        changeText("Earth has been saved by the Ovarias!");
        earth.byWho = 'ovaria;'
        earth.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c2' && ui.draggable.hasClass("draggableO") && (uranus.controlled === false) && (oTurn === true)) {
        reset_text();
        changeText("Uranus has been saved by the Ovarias!")
        $(this).css('background-image', 'url(http://i.imgur.com/xcqk7Km.png');
        uranus.byWho = 'ovaria'
        uranus.controlled = true;
        oTurn = false;
        xTurn = true;

      } else if (current_square === 'c3' && ui.draggable.hasClass("draggableO") && (mars.controlled === false) && (oTurn === true)) {
        reset_text();

        $(this).css('background-image', 'url(http://i.imgur.com/4iLcaae.png');
        changeText("Mars has been saved by the Ovarias!")
        mars.byWho = 'ovaria'
        mars.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c4' && ui.draggable.hasClass("draggableO") && (neptune.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/SS0IRXq.png');
        changeText("Neptune has been saved by the Ovarias!");
        neptune.byWho = ovaria;
        neptune.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c5' && ui.draggable.hasClass("draggableO") && (theSun.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/pekTKHw.png');
        changeText("The sun has been saved by the Ovarias!");
        theSun.byWho = 'ovaria';
        theSun.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c6' && ui.draggable.hasClass("draggableO") && (venus.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/EWbippL.png');
        changeText("Venus has been saved by the Ovarias!")
        venus.byWho = 'ovaria'
        venus.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c7' && ui.draggable.hasClass("draggableO") && (mercury.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/CPntIMv.png');
        changeText("Mercury has been saved by the Ovarias!");
        mercury.byWho = 'ovaria';
        mercury.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c8' && ui.draggable.hasClass("draggableO") && (saturn.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/cLeNrxm.png');
        changeText("Saturn has been saved by the Ovarias!");
        saturn.byWho = 'ovaria';
        saturn.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c9' && ui.draggable.hasClass("draggableO") && (jupiter.controlled === false) && (oTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/Vi0m3On.png');
        changeText("Jupiter has been saved by the Ovarias!")
        jupiter.byWho = 'ovaria';
        jupiter.controlled = true;
        oTurn = false;
        xTurn = true;
      } else if (current_square === 'c1' && ui.draggable.hasClass("draggableX") && (earth.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif');
        changeText("Earth has been conquered by the Xyphonoids!")
        earth.byWho = 'xyphonoid';
        earth.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c2' && ui.draggable.hasClass("draggableX") && (uranus.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Uranus has been conquered by the Xyphonoids!")
        uranus.byWho = 'xyphonoid';
        uranus.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c3' && ui.draggable.hasClass("draggableX") && (mars.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Mars has been conquered by the Xyphonoids!");
        mars.byWho = 'xyphonoid';
        mars.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c4' && ui.draggable.hasClass("draggableX") && (neptune.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Neptune has been conquered by the Xyphonoids!");
        neptune.byWho = 'xyphonoid';
        neptune.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c5' && ui.draggable.hasClass("draggableX") && (theSun.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/fPobuiJ.png)');
        changeText("The sun has been conquered by the Xyphonoids!")
        theSun.byWho = 'xyphonoid';
        theSun.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c6' && ui.draggable.hasClass("draggableX") && (venus.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Venus has been conquered by the Xyphonoids!")
        venus.byWho = 'xyphonoid';
        venus.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c7' && ui.draggable.hasClass("draggableX") && (mercury.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Mercury has been conquered by the Xyphonoids!")
        mercury.byWho = 'xyphonoid';
        mercury.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c8' && ui.draggable.hasClass("draggableX") && (saturn.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Saturn has been conquered by the Xyphonoids!")
        saturn.byWho = 'xyphonoid';
        saturn.controlled = true;
        xTurn = false;
        oTurn = true;
      } else if (current_square === 'c9' && ui.draggable.hasClass("draggableX") && (jupiter.controlled === false) && (xTurn === true)) {
        reset_text();
        $(this).css('background-image', 'url(http://i.imgur.com/toCSozd.gif)');
        changeText("Jupiter has been conquered by the Xyphonoids!")
        jupiter.byWho = 'xyphonoid';
        jupiter.controlled = true;
        xTurn = false;
        oTurn = true;
      }
      win();
    }
  })
})

//Router

// var Router = Backbone.Router.extend({
//
//   routes: {
//     '': 'intro',
//     ':game': 'showGame'
//   },
//
//   intro: function() {
//     $.get('intro.html').then(function(page) {
//       $('body').html(page);
//     })
//   },
//
//   showGame: function() {
//     $.get('game.html').then(function(page) {
//       $('body').html(page);
//         });
//     }
//   });
//
// $(function() {
//   const router = new Router();
//   Backbone.history.start();
// });
