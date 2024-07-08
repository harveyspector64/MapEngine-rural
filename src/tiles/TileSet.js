// src/tiles/TileSetTest.js

import Tile from './Tile.js';
import TileSet from './TileSet.js';

// Initialize TileSet
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
    console.log(`Tile initialized for test: ${tile.type} with image ${tile.image}`);
});

// Test tile retrieval
const grassTile = tileSet.getTile('grass');
console.log(grassTile ? `Grass tile found: ${grassTile.image}` : 'Grass tile not found');

const roadTile = tileSet.getTile('road');
console.log(roadTile ? `Road tile found: ${roadTile.image}` : 'Road tile not found');
