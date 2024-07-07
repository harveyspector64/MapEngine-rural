// src/tiles/TileSet.js

import Tile from './Tile.js';

/**
 * Class representing a collection of tiles.
 */
class TileSet {
    /**
     * Create a TileSet.
     */
    constructor() {
        this.tiles = {};
        this.loadTiles();
    }

    /**
     * Load all tile definitions.
     */
    loadTiles() {
        // Define tiles with their corresponding images
        this.tiles['grass'] = new Tile('grass', 'assets/grass.png');
        this.tiles['field'] = new Tile('field', 'assets/field.png');
        this.tiles['dirt'] = new Tile('dirt', 'assets/dirt.png');
        this.tiles['road'] = new Tile('road', 'assets/road.png');
        this.tiles['tree'] = new Tile('tree', 'assets/tree.png');
        this.tiles['bush'] = new Tile('bush', 'assets/bushy_grass.png');
        this.tiles['hill'] = new Tile('hill', 'assets/hill.png');
        this.tiles['barn'] = new Tile('barn', 'assets/barn.png');
        this.tiles['silo'] = new Tile('silo', 'assets/silo.png');
    }

    /**
     * Get a tile by its type.
     * @param {string} type - The type of the tile.
     * @return {Tile} - The tile object.
     */
    getTile(type) {
        return this.tiles[type];
    }
}

export default TileSet;
