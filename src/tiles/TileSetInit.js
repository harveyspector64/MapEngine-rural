// src/tiles/TileSetInit.js

import Tile from './Tile.js';
import TileSet from './TileSet.js';

/**
 * Initialize the tile set with tile definitions and connections.
 * @return {TileSet} - The initialized tile set.
 */
export function initializeTileSet() {
    const tileSet = new TileSet();

    const tiles = [
        new Tile('grass', 'assets/grass.png'),
        new Tile('field', 'assets/dirt.png'),
        new Tile('dirt', 'assets/dirt.png'),
        new Tile('road', 'assets/road.png'),
        new Tile('tree', 'assets/tree.png'),
        new Tile('bush', 'assets/bush.png'),
        new Tile('hill', 'assets/hill.png'),
        new Tile('barn', 'assets/barn.png'),
        new Tile('silo', 'assets/silo.png')
    ];

    tiles.forEach(tile => {
        tileSet.addTile(tile);
        console.log(`Tile initialized: ${tile.type} with image ${tile.image}`);  // Detailed logging
    });

    console.log('Added tiles:', Object.keys(tileSet.tiles)); // Logging added tiles

    tileSet.getTile('grass').addConnection('grass');
    tileSet.getTile('grass').addConnection('field');
    tileSet.getTile('grass').addConnection('dirt');
    tileSet.getTile('grass').addConnection('tree');
    tileSet.getTile('grass').addConnection('bush');
    tileSet.getTile('grass').addConnection('hill');

    tileSet.getTile('field').addConnection('field');
    tileSet.getTile('field').addConnection('grass');

    tileSet.getTile('dirt').addConnection('dirt');
    tileSet.getTile('dirt').addConnection('road');
    tileSet.getTile('dirt').addConnection('grass');

    tileSet.getTile('road').addConnection('road');
    tileSet.getTile('road').addConnection('dirt');

    tileSet.getTile('tree').addConnection('grass');
    tileSet.getTile('bush').addConnection('grass');
    tileSet.getTile('hill').addConnection('grass');

    console.log('TileSet initialized:', tileSet);
    return tileSet;
}
