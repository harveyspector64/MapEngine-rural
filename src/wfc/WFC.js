// src/wfc/WFC.js

import TileSet from '../tiles/TileSet.js';
import { initializeState, collapseState } from './WFCUtils.js';

/**
 * Class representing the Wave Function Collapse (WFC) algorithm.
 */
class WFC {
    /**
     * Create a WFC instance.
     */
    constructor() {
        this.tileSet = new TileSet();
        this.width = 10; // Set desired map width
        this.height = 10; // Set desired map height
        this.state = initializeState(this.tileSet, this.width, this.height);
    }

    /**
     * Generate the map using WFC.
     * @return {Array} - The generated map.
     */
    generateMap() {
        collapseState(this.state);
        return this.state.tiles;
    }
}

export default WFC;
