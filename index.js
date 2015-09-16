// // alert(
// //   "The Xyphonoids have invaded the Ovaria's galaxy! They plan to develop a stronghold by conquering consecutive planets and turning them into operational battle stations! If they control three consecutive planets, Ovaria is DOOMED! The Ovarias must fly in and place force-fields over the planets before the Xyphonoids gain control and destroy Ovaria life as we know it! Who will win this great battle? You decide!"
// // )
//
// var xyphonoid = $('#X');
// var ovaria = $('#O');
// var draggableO = $('.draggableO')
// var draggableX = $('.draggableX')
// var droppable = $('.droppable')
//
// var mars = '';
// var uranus = '';
// var earth = '';
// var neptune = '';
// var theSun = '';
// var venus = '';
// var mercury = '';
// var saturn = '';
// var jupiter = '';
//
// var planets = {
//   mars,
//   uranus,
//   earth,
//   neptune,
//   theSun,
//   venus,
//   mercury,
//   saturn,
//   jupiter
// }
//
// var win = function() {
//   if ((mars === xyphonoid) && (uranus === xyphonoid) && (earth === xyphonoid) ||
//     (mars === xyphonoid) && (neptune === xyphonoid) && (mercury === xyphonoid) ||
//     (neptune === xyphonoid) && (theSun === xyphonoid) && (venus === xyphonoid) ||
//     (mars === xyphonoid) && (uranus === xyphonoid) && (earth === xyphonoid) ||
//     (uranus === xyphonoid) && (theSun === xyphonoid) && (saturn === xyphonoid) ||
//     (earth === xyphonoid) && (venus === xyphonoid) && (jupiter === xyphonoid) ||
//     (mercury === xyphonoid) && (saturn === xyphonoid) && (jupiter ===
//       xyphonoid) ||
//     (mercury === xyphonoid) && (theSun === xyphonoid) && (earth === xyphonoid)
//   ) {
//
//     alert(
//       "The Xyphonoids have gained control of the galaxy! Prepare for impending DOOM!"
//     )
//
//   } else if ((mars === ovaria) && (uranus === ovaria) && (earth === ovaria) ||
//     (mars === ovaria) && (neptune === ovaria) && (mercury === ovaria) ||
//     (neptune === ovaria) && (theSun === ovaria) && (venus === ovaria) ||
//     (mars === ovaria) && (uranus === ovaria) && (earth === ovaria) ||
//     (uranus === ovaria) && (theSun === ovaria) && (saturn === ovaria) ||
//     (earth === ovaria) && (venus === ovaria) && (jupiter === ovaria) ||
//     (mercury === ovaria) && (saturn === ovaria) && (jupiter === ovaria) ||
//     (mercury === ovaria) && (theSun === ovaria) && (earth === ovaria)) {
//
//     alert(
//       "The Ovarias have saved the galaxy from destruction! The Xyphonoids have retreated!"
//     )
//   }
// };
//
// $(function() {
//   $(".draggableX").draggable();
//   $(".draggableO").draggable();
//
//   $('.droppable').droppable({
//     drop: function(event, ui) {
//
//       var current_square = $(this).attr("id");
//
//       if (current_square === 'c1' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Earth has been saved by the Ovarias!")
//       } else if (current_square === 'c2' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Uranus has been saved by the Ovarias!")
//       } else if (current_square === 'c3' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Mars has been saved by the Ovarias!")
//       } else if (current_square === 'c4' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Neptune has been saved by the Ovarias!")
//       } else if (current_square === 'c5' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("The sun has been saved by the Ovarias!")
//       } else if (current_square === 'c6' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Venus has been saved by the Ovarias!")
//       } else if (current_square === 'c7' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Mercury has been saved by the Ovarias!")
//       } else if (current_square === 'c8' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Saturn has been saved by the Ovarias!")
//       } else if (current_square === 'c9' && ui.draggable.hasClass(
//           "draggableO")) {
//         alert("Jupiter has been saved by the Ovarias!")
//       } else if (current_square === 'c1' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Earth has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c2' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Uranus has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c3' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Mars has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c4' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Neptune has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c5' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("The sun has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c6' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Venus has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c7' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Mercury has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c8' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Saturn has been conquered by the Xyphonoids!")
//       } else if (current_square === 'c9' && ui.draggable.hasClass(
//           "draggableX")) {
//         alert("Jupiter has been conquered by the Xyphonoids!")
//       }
//     }
//   })
// });
