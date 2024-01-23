export class Sequence {
    /* Internal variables for this class */
    sequence; // Array: an array holding the sequence
    index; // Integer: current index in the sequence, from 0 to the length of the sequence - 1
    
    /**
     * Constructor: create a sequence from an array
     * @param {Array} list The list of elements for this sequence in an Array
     */
    constructor(list) {
        this.sequence = [...list]; // Use spread operator for array copy
        this.index = 0;
    }
    set index(i) {
      this.index = i;
  
    }
    /**
     * return the current element in the sequence and advance the sequence index
     */
  
    next() {
        const currentElement = this.sequence[this.index]; 
        this.index = (this.index + 1) % this.sequence.length; 
        return currentElement; 
    }
  }