export class Sequence {
  /* Internal variables for this class */
  sequence; // Array: an array holding the sequence
  index; // Integer: current index in the sequence, from 0 to the length of the sequence - 1
  
  /**
   * Constructor: create a sequence from an array
   * @param {Array} list The list of elements for this sequence in an Array
   */
  constructor(list) {
      this.sequence = [...list]; // copies the array using the spread operator into the internal class variable sequence
      this.index = 0; // sets the internal class variable to 0 
  }
  set index(i) { // setter method which allows external code to set the value of index  
    this.index = i; 

  }
  /**
   * return the current element in the sequence and advance the sequence index
   */

  next() { //returns the current element in the sequence and advances the index
      const currentElement = this.sequence[this.index]; //retrieves the current element in the sequence based on this.index 
      this.index = (this.index + 1) % this.sequence.length; //advances the sequence index to the next position, if it reaches the end the modulo operator wraps around to the beginning 
      return currentElement; //returns the current element in the sequence
  }
}