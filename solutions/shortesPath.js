function shortestPath(mat, init, end) {
  const paths = findPaths(mat, init, end);

  return paths.length <= 0 ? -1 : Math.min(...paths);
}

function findPaths(mat, init, end, step = mat.length - 1) {
  if(step <= 0) return [];
  if(init === end) return [0];

  let paths = [];
  const vertex = mat[init];

  vertex.forEach((edge, index) => {
    if(edge > 0) {
      paths = [
        ...paths,
        ...findPaths(mat, index, end, step - 1).map(el => el + edge)
      ];
    }
  });

  return paths;
}

var mat = [
  [-1, 10, 5, 0],
  [0, -1, 0, 3],
  [0, 4, -1, 6],
  [0, 0, 0, -1]
]

// shortestPath(mat, 0, 3); [13, 12, 11] //continue
  // shortestPath(mat, 1, 3); [3] // retorno
  //   shortestPath(mat, 3, 3); [0] // retorno
  // shortestPath(mat, 2, 3); [7, 6] // retorna
    // shortestPath(mat, 1, 3); [3] // retorna
    //   shortestPath(mat, 3, 3); [0] // retorna
    // shortestPath(mat, 3, 3); [0] //retorna

console.log(shortestPath(mat, 0, 3)); // 11
console.log(shortestPath(mat, 2, 0)); // -1
