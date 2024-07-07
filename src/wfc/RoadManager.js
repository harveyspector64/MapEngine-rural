// src/wfc/RoadManager.js

/**
 * Extend a road to neighboring tiles.
 * @param {Object} state - The WFC state.
 * @param {number} x - The x coordinate of the starting cell.
 * @param {number} y - The y coordinate of the starting cell.
 */
export function extendRoad(state, x, y) {
    const directions = [
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 }
    ];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const nx = x + dir.dx;
    const ny = y + dir.dy;
    if (nx < state.width && ny < state.height && state.tiles[ny][nx] === null) {
        state.tiles[ny][nx] = 'road';
        updateEntropy(state, nx, ny, 'road');
    }
}
