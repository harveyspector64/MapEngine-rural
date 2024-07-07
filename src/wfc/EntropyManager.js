// src/wfc/EntropyManager.js

/**
 * Find the cell with the lowest entropy.
 * @param {Object} state - The WFC state.
 * @return {Object|null} - The cell with the lowest entropy or null if all cells are collapsed.
 */
export function findCellWithLowestEntropy(state) {
    let minEntropy = Infinity;
    let cell = null;

    for (let y = 0; y < state.height; y++) {
        for (let x = 0; x < state.width; x++) {
            const entropy = state.entropy[y][x].length;
            if (state.tiles[y][x] === null && entropy < minEntropy) {
                minEntropy = entropy;
                cell = { x, y };
            }
        }
    }

    console.log('Cell with lowest entropy found:', cell);
    return cell;
}

/**
 * Update the entropy of neighboring cells.
 * @param {Object} state - The WFC state.
 * @param {number} x - The x coordinate of the cell.
 * @param {number} y - The y coordinate of the cell.
 * @param {string} selectedTileType - The type of the selected tile.
 */
export function updateEntropy(state, x, y, selectedTileType) {
    // Update entropy for neighboring cells
    const neighbors = [
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 }
    ];

    for (const neighbor of neighbors) {
        const nx = x + neighbor.dx;
        const ny = y + neighbor.dy;

        if (nx >= 0 && ny >= 0 && nx < state.width && ny < state.height && state.tiles[ny][nx] === null) {
            state.entropy[ny][nx] = state.entropy[ny][nx].filter(type => type !== selectedTileType);
        }
    }

    console.log(`Entropy updated for neighbors of cell (${x}, ${y})`);
}
