// src/tiles/TileSet.js

import Tile from './Tile.js';

/**
 * Class representing a set of tiles.
 */
class TileSet {
    constructor() {
        this.tiles = {};
    }

    /**
     * Add a tile to the tile set.
     * @param {Tile} tile - The tile to add.
     */
    addTile(tile) {
        this.tiles[tile.type] = tile;
        console.log(`Tile added: ${tile.type}`);  // Debugging
    }

    /**
     * Get a tile by its type.
     * @param {string} type - The type of the tile.
     * @return {Tile} - The tile with the specified type.
     */
    getTile(type) {
        if (!this.tiles[type]) {
            console.error(`Tile not found during getTile: ${type}`);
        }
        return this.tiles[type];
    }
}

export default TileSet;
