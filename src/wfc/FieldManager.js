// src/wfc/FieldManager.js

/**
 * Expand a field of dirt tiles.
 * @param {Object} state - The WFC state.
 * @param {number} x - The x coordinate of the starting cell.
 * @param {number} y - The y coordinate of the starting cell.
 */
export function expandField(state, x, y) {
    const size = Math.floor(Math.random() * 3) + 2; // Random field size between 2x2 and 4x4
    for (let dy = 0; dy < size; dy++) {
        for (let dx = 0; dx < size; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < state.width && ny < state.height && state.tiles[ny][nx] === null) {
                state.tiles[ny][nx] = 'field';
                updateEntropy(state, nx, ny, 'field');
            }
        }
    }
}
