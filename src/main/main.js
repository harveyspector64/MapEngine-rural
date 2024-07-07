// src/main/main.js

import WFC from '../wfc/WFC.js';

/**
 * Main function to initialize tile set and generate map using WFC.
 */
document.addEventListener('DOMContentLoaded', () => {
    const wfc = new WFC();
    const map = wfc.generateMap();

    // Log generated map for debugging
    console.log('Generated map:', map);

    // Display map on canvas for verification
    const canvas = document.createElement('canvas');
    canvas.width = wfc.width * 32; // 32 is the tile size
    canvas.height = wfc.height * 32;
    document.body.appendChild(canvas);

    const context = canvas.getContext('2d');
    map.forEach((row, y) => {
        row.forEach((tileType, x) => {
            const img = new Image();
            img.src = wfc.tileSet.getTile(tileType).image;
            img.onload = () => {
                context.drawImage(img, x * 32, y * 32, 32, 32);
            };
        });
    });
});
