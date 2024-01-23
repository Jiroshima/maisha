/**
 * Final exam part 1: sequences
 */



import './lib/p5.min.js'
const sketchHolder = document.getElementById('sketch');

/**
 * A class to hold a repeating sequence of anything: numbers, characters, etc.
 */

import { Sequence } from './sequence.js' //imports the sequence file into main program
import './lib/p5.min.js'; //imports the p5js file 

// our sequence to draw -- customise this as you'd like (you can even use emoji)


// --------- STEP 5 ----------------------------
// create an instance of the sequence class
let sequenceArray = ['0', '0', '1', '1', '.', '.', '.'];
let sequence = new Sequence(sequenceArray);

// --------- STEP 4 ----------------------------
//
// colours for each sequence element
const lookup = {
    '0': `hsla(300, 100%, 50%,1)`,
    '1': `hsla(120, 100%, 70%, 1)`,
        '.': `hsla(0,  100%, 60%, 1)`,
        ' ': `hsla(90, 100%, 10%,1)`,
        'X': 'hsla(200, 100%, 40%,1)', 
        'e':'hsla(30, 100%, 80%,1)',
        'E':'hsla(0, 0%,100%,1)',

};


// --------- STEP 1 ----------------------------

// function drawSequenceFromArray(sequence, numRows) {
//     textSize(40);
//     let elementWidth = width/7;
//     let elementHeight = height/7;
//     let x = 0;
//     let y = 0;

//     for (let row = 0; row <6; row++) {
//         for (let element of sequenceArray) {
//             fill(lookup[element]);
//             text(element,x,y);

//             x = x + elementWidth;
//         }
//         x = 0;
//         y += elementHeight;
//     }

// }


// --------- STEP 6 ----------------------------

/**
 *
 * @param {Sequence} sequence to draw
 * @param {Integer} size horizontal size
 */
function drawSequence(sequence, size) { //creates a function called drawsequence that takes the parameters sequence and size 
const elementWidth = size; // creates constant for width 
const elementHeight = size; //creates constant for height = size passed thru 
const charWidth = 600 / size; //calcualtes the character width and height, 600px 
const charHeight = 600 / size;

    for (let row = 0; row < elementHeight; row++) {  //iterates through the rows 
        for (let col = 0; col < elementWidth; col++) { //iterates through the collumns 
            const element = sequence.next(); //grabs the next element from the internal class variable sequence

            const x = col * charWidth; //calculates the x and y coordinates for the character width and height 
            const y = row * charHeight; 

            fill(lookup[element]); //looks up the colour of the element then fills it 
            textSize(charHeight); //sets text size 
            text(element, x, y + charHeight); //puts the element in the coordinates 
      
        }
    }
    sequence.index = 0;
}
   

{
    // This function is very much like drawSequenceFromArray() above but it takes a Sequence object
    // and a size (as opposed to the length of the original sequence array)


}

/**
 * SETUP --------------------------------------------------
 */
window.setup = function () {
    createCanvas(600, 600).parent(sketchHolder);
}

/**
 * DRAW --------------------------------------------------
 */
window.draw = function() {
    drawSequence(sequence, 40) //draws sketch depending on size
    // background(25);
    // drawSequenceFromArray(sequence, 5);
}