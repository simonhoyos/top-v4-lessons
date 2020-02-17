class Stacks {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    this.size++;
    this.head = value;

    if(!this.tail) {
      this.tail = value;
    }

    return value;
  }

  pop() {
    const last = this.data.pop();
    this.size--;

    if(this.data.length <= 0) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.data[this.data.length - 1];
    }

    return last;
  }
}
