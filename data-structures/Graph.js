// Listas de adyancencia
const graph = {
  1: [{ node: 2, value: 2 }, { node: 3, value: 1 }, { node: 4, value: 100 }],
  2: [1, 3]
  3: [2, 1, 4],
  4: [1, 3, 5],
  5: [],
}

// matrices de adyancencia
const graph = [
  [-1, 2, 1, 100, 0],
  [2, -1, 1, 0, 0],
  [1, 1, -1, 3, 0],
  [100, 0, 3, -1, 15],
  [0, 0, 0, 0, -1]
];

// nodos interconectados
class Node {
  constructor(value) {
    this.value = value;
    this.ref = [];
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.ref.push({ node: node2, value: 2 });
node1.ref.push(node3);
node1.ref.push(node4);

node2.ref.push(node1);
node2.ref.push(node3);

node3.ref.push(node1);
node3.ref.push(node2);
node3.ref.push(node4);
