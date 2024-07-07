// src/tiles/Tile.js

/**
 * Class representing a tile in the map.
 */
class Tile {
    /**
     * Create a tile.
     * @param {string} type - The type of the tile.
     * @param {string} image - The path to the tile's image.
     */
    constructor(type, image) {
        this.type = type;
        this.image = image;
        this.connectsTo = []; // Array of tile types this tile can connect to
    }

    /**
     * Add a connection to another tile type.
     * @param {string} type - The type of the tile to connect to.
     */
    addConnection(type) {
        this.connectsTo.push(type);
    }
}

export default Tile;
