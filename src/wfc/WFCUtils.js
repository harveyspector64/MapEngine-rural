// src/wfc/WFCUtils.js

import TileSet from '../tiles/TileSet.js';

/**
 * Initialize the WFC state with tiles.
 * @param {TileSet} tileSet - The set of tiles to use.
 * @param {number} width - The width of the map.
 * @param {number} height - The height of the map.
 * @return {Object} - The initialized WFC state.
 */
export function initializeState(tileSet, width, height) {
    const state = {
        width: width,
        height: height,
        tiles: [],
        entropy: []
    };

    for (let y = 0; y < height; y++) {
        state.tiles[y] = [];
        state.entropy[y] = [];
        for (let x = 0; x < width; x++) {
            state.tiles[y][x] = null; // No tile assigned yet
            state.entropy[y][x] = Object.keys(tileSet.tiles); // All tiles are possible initially
        }
    }

    console.log('Initialized WFC state:', state);
    return state;
}

/**
 * Implement the WFC collapse logic.
 * @param {Object} state - The WFC state.
 */
export function collapseState(state) {
    while (!isFullyCollapsed(state)) {
        const cell = findCellWithLowestEntropy(state);
        if (!cell) break;

        const possibleTiles = state.entropy[cell.y][cell.x];
        const selectedTileType = possibleTiles[Math.floor(Math.random() * possibleTiles.length)];
        state.tiles[cell.y][cell.x] = selectedTileType;

        updateEntropy(state, cell.x, cell.y, selectedTileType);

        // Debugging information
        console.log(`Collapsed cell (${cell.x}, ${cell.y}) to tile: ${selectedTileType}`);
    }
}

/**
 * Check if the WFC state is fully collapsed.
 * @param {Object} state - The WFC state.
 * @return {boolean} - True if the state is fully collapsed, false otherwise.
 */
function isFullyCollapsed(state) {
    for (let y = 0; y < state.height; y++) {
        for (let x = 0; x < state.width; x++) {
            if (state.tiles[y][x] === null) return false;
        }
    }
    return true;
}

/**
 * Find the cell with the lowest entropy.
 * @param {Object} state - The WFC state.
 * @return {Object|null} - The cell with the lowest entropy or null if all cells are collapsed.
 */
function findCellWithLowestEntropy(state) {
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

    return cell;
}

/**
 * Update the entropy of neighboring cells.
 * @param {Object} state - The WFC state.
 * @param {number} x - The x coordinate of the cell.
 * @param {number} y - The y coordinate of the cell.
 * @param {string} selectedTileType - The type of the selected tile.
 */
function updateEntropy(state, x, y, selectedTileType) {
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
}
