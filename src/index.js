class Sorter {
  constructor(element) {
    this.element = element;
    this.arr = [];
    this.compareFunction;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let newArr = [];
    let arrOfIndices = [];

  
    for (var i = 0; i < this.arr.length; i++) {
      if (indices.indexOf(i) !== -1) {
        newArr.push(this.arr[i]);
        arrOfIndices.push(i);
      }
    } 
    let newArrSorted = this.compareFunction ?  newArr.sort(this.compareFunction) : newArr.sort(function(a,b) {
       return a - b;
    });
    let x = 0;
    for (var i = 0; i < this.arr.length; i++) {
      if(arrOfIndices.indexOf(i) !== -1) {
        this.arr[i] = newArrSorted[x];
        ++x;
      }
    } 
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;