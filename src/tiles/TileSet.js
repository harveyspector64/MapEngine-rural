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
        console.log(`Tile added: ${tile.type} with image ${tile.image}`);  // Detailed logging
    }

    /**
     * Get a tile by its type.
     * @param {string} type - The type of the tile.
     * @return {Tile} - The tile with the specified type.
     */
    getTile(type) {
        if (!this.tiles[type]) {
            console.error(`Tile not found during getTile: ${type}`);
        } else {
            console.log(`Tile retrieved: ${type} with image ${this.tiles[type].image}`);  // Detailed logging
        }
        return this.tiles[type];
    }
}

export default TileSet;
