// src/main/main.js

import WFC from '../wfc/WFC.js';

/**
 * Main function to initialize tile set and generate map using WFC.
 */
document.addEventListener('DOMContentLoaded', () => {
    const initializeMap = () => {
        // Get the size of the browser window
        const width = Math.floor(window.innerWidth / 32); // 32 is the tile size
        const height = Math.floor(window.innerHeight / 32); // 32 is the tile size

        const wfc = new WFC(width, height);
        const map = wfc.generateMap();

        // Log generated map for debugging
        console.log('Generated map:', map);

        // Clear previous canvas and create a new one
        document.body.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.width = width * 32; // 32 is the tile size
        canvas.height = height * 32;
        document.body.appendChild(canvas);

        const context = canvas.getContext('2d');
        map.forEach((row, y) => {
            row.forEach((tileType, x) => {
                const tile = wfc.tileSet.getTile(tileType);
                if (tile) {
                    const img = new Image();
                    img.src = tile.image;
                    img.onload = () => {
                        context.drawImage(img, x * 32, y * 32, 32, 32);
                    };
                } else {
                    console.error(`Tile not found: ${tileType}`);
                }
            });
        });
    };

    // Initialize the map on load
    initializeMap();

    // Handle window resize to dynamically adjust the map size
    window.addEventListener('resize', initializeMap);
});
