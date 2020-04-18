/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length <= 0 || grid[0].length <= 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let result = 0;
    let visited =
        Array.from({ length: rows }, _ =>
            Array.from({ length: cols }, _ => false)
        );

    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            if(grid[i][j] == 0 || visited[i][j]) return;

            explore(grid, i, j, visited);
            result++;
        });
    });

    return result;
};

function explore(grid, i, j, visited) {
    if(
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] == 0 ||
        visited[i][j]
    ) {
        return;
    }

    visited[i][j] = true;
    explore(grid, i - 1, j, visited);
    explore(grid, i + 1, j, visited);
    explore(grid, i, j - 1, visited);
    explore(grid, i, j + 1, visited);
}
