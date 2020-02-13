class Node {
  constructor(value) {
    this.value = value;
    this.leftRef = null;
    this.rightRef = null;
  }
}

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
    return value;
  }

  dequeue() {
    const [current, ...rest] = this.data;
    this.data = rest;
    return current;
  }

  size() {
    return this.data.length;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      this._addNode(this.head, node);
    }

    return node;
  }

  _addNode(currentNode, newNode) {
    if(newNode.value < currentNode.value) {
      // add to left
      if(!currentNode.leftRef) {
        currentNode.leftRef = newNode;
      } else {
        this._addNode(currentNode.leftRef, newNode);
      }
    } else {
      // add to right
      if(!currentNode.rightRef) {
        currentNode.rightRef = newNode;
      } else {
        this._addNode(currentNode.rightRef, newNode);
      }
    }
  }

  transverseDFS(cb, node = this.head) {
    if(!node) return;

    cb(node.value);
    this.transverseDFS(cb, node.leftRef);
    this.transverseDFS(cb, node.rightRef);
  }

  transverseBFS(cb) {
    if(!this.head) return;

    const queue = new Queue();
    queue.enqueue(this.head);

    while(queue.size() > 0) {
      const currentNode = queue.dequeue();
      cb(currentNode.value);

      if(currentNode.leftRef) {
        queue.enqueue(currentNode.leftRef);
      }

      if(currentNode.rightRef) {
        queue.enqueue(currentNode.rightRef);
      }
    }
  }
}

const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
console.log(tree.head);
tree.transverseDFS((e) => { console.log(e) });
console.log('--------------')
tree.transverseBFS((e) => { console.log(e) });

// transverseDFS(cb, this.head); // continue
  // transverseDFS(cb, this.head.leftref); // continue
    // transverseDFS(cb, leftRef)
    // transverseDFS(cb, rightRef); // continue
      // transverseDFS(cb, leftRef);
  // transverseDFS(cb, this.head.rightRef); // continue
    // transverseDFS(cb, leftRef);
    // transverseDFS(cb, rightRef);
