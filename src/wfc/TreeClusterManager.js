// src/wfc/TreeClusterManager.js

/**
 * Cluster trees in a small area.
 * @param {Object} state - The WFC state.
 * @param {number} x - The x coordinate of the starting cell.
 * @param {number} y - The y coordinate of the starting cell.
 */
export function clusterTrees(state, x, y) {
    const size = Math.floor(Math.random() * 2) + 1; // Random cluster size between 1x1 and 2x2
    for (let dy = 0; dy < size; dy++) {
        for (let dx = 0; dx < size; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < state.width && ny < state.height && state.tiles[ny][nx] === null) {
                state.tiles[ny][nx] = 'tree';
                updateEntropy(state, nx, ny, 'tree');
            }
        }
    }
}
