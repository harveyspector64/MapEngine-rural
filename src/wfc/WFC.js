// src/wfc/WFC.js

import { initializeState, collapseState } from './WFCUtils.js';
import TileSet from '../tiles/TileSet.js';

class WFC {
    /**
     * Create a WFC instance.
     * @param {number} width - The width of the map.
     * @param {number} height - The height of the map.
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tileSet = new TileSet();
        this.state = initializeState(this.tileSet, this.width, this.height);
    }

    /**
     * Generate a map using WFC.
     * @return {Array} - The generated map.
     */
    generateMap() {
        collapseState(this.state);
        return this.state.tiles;
    }
}

export default WFC;
