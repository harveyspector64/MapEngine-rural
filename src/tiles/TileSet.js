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
        this.tiles['field'] = new Tile('field', 'assets/dirt.png'); // Corrected filename
        this.tiles['dirt'] = new Tile('dirt', 'assets/dirt.png');
        this.tiles['road'] = new Tile('road', 'assets/road.png');
        this.tiles['tree'] = new Tile('tree', 'assets/tree.png');
        this.tiles['bush'] = new Tile('bush', 'assets/bush.png'); // Corrected filename
        this.tiles['hill'] = new Tile('hill', 'assets/hill.png');
        this.tiles['barn'] = new Tile('barn', 'assets/barn.png');
        this.tiles['silo'] = new Tile('silo', 'assets/silo.png');

        // Define tile connections
        this.tiles['grass'].addConnection('grass');
        this.tiles['grass'].addConnection('field');
        this.tiles['grass'].addConnection('dirt');
        this.tiles['grass'].addConnection('tree');
        this.tiles['grass'].addConnection('bush');
        this.tiles['grass'].addConnection('hill');
        
        this.tiles['field'].addConnection('field');
        this.tiles['field'].addConnection('grass');

        this.tiles['dirt'].addConnection('dirt');
        this.tiles['dirt'].addConnection('road');
        this.tiles['dirt'].addConnection('grass');

        this.tiles['road'].addConnection('road');
        this.tiles['road'].addConnection('dirt');

        this.tiles['tree'].addConnection('grass');
        this.tiles['bush'].addConnection('grass');

        this.tiles['hill'].addConnection('grass');
        
        // Add other connections as needed
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
