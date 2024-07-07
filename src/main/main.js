// src/main/main.js

import TileSet from '../tiles/TileSet.js';

/**
 * Main function to initialize tile set and verify tile loading.
 */
document.addEventListener('DOMContentLoaded', () => {
    const tileSet = new TileSet();

    // Log loaded tiles for debugging
    console.log('Loaded tiles:', tileSet.tiles);

    // Display tile images in the document for verification
    Object.keys(tileSet.tiles).forEach(type => {
        const tile = tileSet.getTile(type);
        const img = document.createElement('img');
        img.src = tile.image;
        img.alt = type;
        img.title = type;
        document.body.appendChild(img);
    });
});
