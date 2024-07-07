// src/tiles/TileSetInit.js

import Tile from './Tile.js';
import TileSet from './TileSet.js';

/**
 * Initialize the tile set with tile definitions and connections.
 * @return {TileSet} - The initialized tile set.
 */
export function initializeTileSet() {
    const tileSet = new TileSet();

    tileSet.addTile(new Tile('grass', 'assets/grass.png'));
    tileSet.addTile(new Tile('field', 'assets/dirt.png'));
    tileSet.addTile(new Tile('dirt', 'assets/dirt.png'));
    tileSet.addTile(new Tile('road', 'assets/road.png'));
    tileSet.addTile(new Tile('tree', 'assets/tree.png'));
    tileSet.addTile(new Tile('bush', 'assets/bush.png'));
    tileSet.addTile(new Tile('hill', 'assets/hill.png'));
    tileSet.addTile(new Tile('barn', 'assets/barn.png'));
    tileSet.addTile(new Tile('silo', 'assets/silo.png'));

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
