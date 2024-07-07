// src/tiles/Tile.js

/**
 * Class representing a single tile.
 */
class Tile {
    /**
     * Create a tile.
     * @param {string} type - The type of the tile.
     * @param {string} image - The image source of the tile.
     */
    constructor(type, image) {
        this.type = type;
        this.image = image;
        this.connections = new Set();
    }

    /**
     * Add a connection to another tile type.
     * @param {string} connectionType - The type of the tile to connect to.
     */
    addConnection(connectionType) {
        this.connections.add(connectionType);
    }
}

export default Tile;
