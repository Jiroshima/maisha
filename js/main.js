/**
 * Final exam part 1: sequences
 */



import './lib/p5.min.js'
const sketchHolder = document.getElementById('sketch');

/**
 * A class to hold a repeating sequence of anything: numbers, characters, etc.
 */

import { Sequence } from './sequence.js' 
import './lib/p5.min.js';

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
function drawSequence(sequence, size) {
const elementWidth = size;
const elementHeight = size;
const charWidth = 600 / size;
const charHeight = 600 / size;

    for (let row = 0; row < elementHeight; row++) {
        for (let col = 0; col < elementWidth; col++) {
            const element = sequence.next();

            const x = col * charWidth;
            const y = row * charHeight;

            fill(lookup[element]);
            textSize(charHeight);
            text(element, x, y + charHeight);
            // Update x for the next element in the row
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
    drawSequence(sequence, 30)
    // background(25);
    // drawSequenceFromArray(sequence, 5);
}