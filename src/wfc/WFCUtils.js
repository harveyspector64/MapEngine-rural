// src/wfc/WFCUtils.js

import { initializeTileSet } from '../tiles/TileSetInit.js';
import { findCellWithLowestEntropy, updateEntropy } from './EntropyManager.js';

/**
 * Initialize the WFC state with tiles.
 * @param {number} width - The width of the map.
 * @param {number} height - The height of the map.
 * @return {Object} - The initialized WFC state.
 */
export function initializeState(width, height) {
    const tileSet = initializeTileSet();
    const state = {
        width: width,
        height: height,
        tiles: [],
        entropy: [],
        barns: 0,
        silos: 0
    };

    for (let y = 0; y < height; y++) {
        state.tiles[y] = [];
        state.entropy[y] = [];
        for (let x = 0; x < width; x++) {
            state.tiles[y][x] = null;
            state.entropy[y][x] = Object.keys(tileSet.tiles);
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

        // Group dirt tiles into fields
        if (selectedTileType === 'field') {
            expandField(state, cell.x, cell.y);
        }

        // Organize roads, trees, bushes, and hills
        if (selectedTileType === 'road') {
            extendRoad(state, cell.x, cell.y);
        }
        if (selectedTileType === 'tree') {
            clusterTrees(state, cell.x, cell.y);
        }
        if (selectedTileType === 'bush') {
            clusterBushes(state, cell.x, cell.y);
        }
        if (selectedTileType === 'hill') {
            placeHills(state, cell.x, cell.y);
        }

        // Place water tiles for rivers and lakes
        if (selectedTileType === 'water') {
            placeWater(state, cell.x, cell.y);
        }

        // Limit and place barns and silos logically
        if (selectedTileType === 'barn' && state.barns < 2) { // Example limit
            state.barns += 1;
        } else if (selectedTileType === 'silo' && state.silos < 2) { // Example limit
            state.silos += 1;
        } else {
            // If limit exceeded, choose a different tile
            state.tiles[cell.y][cell.x] = 'grass';
        }

        // Ensure grassy areas with trees
        if (selectedTileType === 'grass') {
            createGrassyAreas(state, cell.x, cell.y);
        }

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

// Other functions like expandField, extendRoad, clusterTrees, clusterBushes, placeHills, placeWater, createGrassyAreas remain here for now.
