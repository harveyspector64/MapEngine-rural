// src/tiles/TileSetInit.js

import Tile from './Tile.js';

/**
 * Initialize the tile set with tile definitions and connections.
 * @return {TileSet} - The initialized tile set.
 */
export function initializeTileSet() {
    const tileSet = new TileSet();

    tileSet.tiles['grass'] = new Tile('grass', 'assets/grass.png');
    tileSet.tiles['field'] = new Tile('field', 'assets/dirt.png');
    tileSet.tiles['dirt'] = new Tile('dirt', 'assets/dirt.png');
    tileSet.tiles['road'] = new Tile('road', 'assets/road.png');
    tileSet.tiles['tree'] = new Tile('tree', 'assets/tree.png');
    tileSet.tiles['bush'] = new Tile('bush', 'assets/bush.png');
    tileSet.tiles['hill'] = new Tile('hill', 'assets/hill.png');
    tileSet.tiles['barn'] = new Tile('barn', 'assets/barn.png');
    tileSet.tiles['silo'] = new Tile('silo', 'assets/silo.png');

    tileSet.tiles['grass'].addConnection('grass');
    tileSet.tiles['grass'].addConnection('field');
    tileSet.tiles['grass'].addConnection('dirt');
    tileSet.tiles['grass'].addConnection('tree');
    tileSet.tiles['grass'].addConnection('bush');
    tileSet.tiles['grass'].addConnection('hill');

    tileSet.tiles['field'].addConnection('field');
    tileSet.tiles['field'].addConnection('grass');

    tileSet.tiles['dirt'].addConnection('dirt');
    tileSet.tiles['dirt'].addConnection('road');
    tileSet.tiles['dirt'].addConnection('grass');

    tileSet.tiles['road'].addConnection('road');
    tileSet.tiles['road'].addConnection('dirt');

    tileSet.tiles['tree'].addConnection('grass');
    tileSet.tiles['bush'].addConnection('grass');
    tileSet.tiles['hill'].addConnection('grass');

    return tileSet;
}
