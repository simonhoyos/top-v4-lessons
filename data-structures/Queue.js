class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
    this.tail = value;
    // this.size++;

    if(!this.head) {
      this.head = value;
    }

    return value;
  }

  dequeue() {
    // const [first, ...rest] = this.data;
    // this.data = rest;

    const first = this.data.shift();

    if(this.data.length <= 0) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.data[0];
    }
    // this.size--;

    return first;
  }

  size() {
    return this.data.length;
  }
}
