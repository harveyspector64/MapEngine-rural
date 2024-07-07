// src/main/main.js

import TileSet from '../tiles/TileSet.js';

/**
 * Main function to test tile loading.
 */
document.addEventListener('DOMContentLoaded', () => {
    const tileSet = new TileSet();

    // Test tile loading
    console.log('Loaded tiles:', tileSet.tiles);

    // Display tile images in the document for verification
    Object.keys(tileSet.tiles).forEach(type => {
        const tile = tileSet.getTile(type);
        const img = document.createElement('img');
        img.src = tile.image;
        img.alt = type;
        document.body.appendChild(img);
    });
});
