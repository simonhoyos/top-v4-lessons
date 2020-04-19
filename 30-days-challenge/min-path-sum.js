/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid === null || grid.length <= 0 || grid[0].length <= 0) return 0;

    cache = {};

    function findPath(grid, row = 0, col = 0) {
        let value = grid[row][col];

        if(cache[`${row}_${col}`]) {
            return cache[`${row}_${col}`];
        }

        if(row + 1 >= grid.length && col + 1 >= grid[0].length) {
            cache[`${row}_${col}`] = value;
            return cache[`${row}_${col}`];
        }

        if(row + 1 >= grid.length) {
            cache[`${row}_${col}`] = value + findPath(grid, row, col + 1);
            return cache[`${row}_${col}`];
        }

        if(col + 1 >= grid[0].length) {
            cache[`${row}_${col}`] = value + findPath(grid, row + 1, col);
            return cache[`${row}_${col}`];
        }

        cache[`${row}_${col}`] = value + Math.min(findPath(grid, row + 1, col), findPath(grid, row, col + 1));

        return cache[`${row}_${col}`];
    }


    return findPath(grid);
};


// var minPathSum = function(grid) {
//     if(grid === null || grid.length <= 0 || grid[0].length <= 0) return 0;


//     return findPath(grid);
// };

// function findPath(grid, row = 0, col = 0) {
//     let value = grid[row][col];

//     if(row + 1 >= grid.length && col + 1 >= grid[0].length) {
//         return value;
//     }

//     if(row + 1 >= grid.length) {
//         return value + findPath(grid, row, col + 1);
//     }

//     if(col + 1 >= grid[0].length) {
//         return value + findPath(grid, row + 1, col);
//     }

//     return value + Math.min(findPath(grid, row + 1, col), findPath(grid, row, col + 1));
// }
