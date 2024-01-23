/**
 * Final exam part 1: sequences
 */



import './lib/p5.min.js'
const sketchHolder = document.getElementById('sketch');

/**
 * A class to hold a repeating sequence of anything: numbers, characters, etc.
 */

class Sequence 
{
    sequence; // Array: an array holding the sequence index; // Integer: current index in the sequence, from 0 to the length of the sequence - 1
    index; 

    /**
     * Constructor: create a sequence from an array
     * @param {Array} list The list of elements for this sequence in an Array
     */
    constructor (list)
    {
        // --------- STEP 2 ----------------------------

        // copy the array elements from list to our internal sequence variable starting at
        // the beginning element 0

        // Hint: the variable is called this.sequence inside this class
       
        // set the start index
    }

    /**
     * Return the current element in the sequence and advance the sequence index
     */
    next()
    {
        // --------- STEP 3 ----------------------------
    }

}
// our sequence to draw -- customise this as you'd like (you can even use emoji)
let sequenceArray = ['0', '0', '1', '1', '.', '.', '.'];
let sequence = new Sequence(sequenceArray);//['X','e','E']
     

// --------- STEP 5 ----------------------------
// create an instance of the sequence class


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

function drawSequenceFromArray(sequence, numRows) {
    textSize(40);
    let elementWidth = width/7;
    let elementHeight = height/7;
    let x = 0;
    let y = 0;

    for (let row = 0; row <6; row++) {
        for (let element of sequenceArray) {
            fill(lookup[element]);
            text(element,x,y);

            x = x + elementWidth;
        }
        x = 0;
        y += elementHeight;
    }
class Sequence {

   
    constructor(list) {
        this.sequence = sequence.sequence;
        this.index = 0;
    }

    next () {
        if (this.index < this.sequence.length){
            return this.sequence[this.index++];

        } else {
            this.index=0
            return this.sequence[this,index++];
        }
    }
}

}




// --------- STEP 6 ----------------------------

/**
 *
 * @param {Sequence} sequence to draw
 * @param {Integer} size horizontal size
 */
function drawSequence(sequence, size) {

        textSize(40);
        let elementWidth = width / size;
        let elementHeight = height / sequence.sequence.length;
        let x = 0;
        let y = 0;
   
        for (let row = 0; row < sequence.sequence.length; row++) {
            for (let i = 0; i < size; i++) {
                let element = sequence.next();
                fill(lookup[element]);
                text(element, x + i * elementWidth, y);
                // Update x for the next element in the row
                x = x + elementWidth;
            }
            // Reset x for the next row
            x = 0;
            // Update y for the next row
            y += elementHeight;
        }
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
    drawSequence(sequence, 20)
    // background(25);
    // drawSequenceFromArray(sequence, 5);
}