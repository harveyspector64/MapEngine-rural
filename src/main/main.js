// src/main/main.js

import WFC from '../wfc/WFC.js';

/**
 * Main function to initialize tile set and generate map using WFC.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the size of the browser window
    const width = Math.floor(window.innerWidth / 32); // 32 is the tile size
    const height = Math.floor(window.innerHeight / 32); // 32 is the tile size

    const wfc = new WFC(width, height);
    const map = wfc.generateMap();

    // Log generated map for debugging
    console.log('Generated map:', map);

    // Display map on canvas for verification
    const canvas = document.createElement('canvas');
    canvas.width = width * 32; // 32 is the tile size
    canvas.height = height * 32;
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

    // Handle window resize to dynamically adjust the map size
    window.addEventListener('resize', () => {
        const newWidth = Math.floor(window.innerWidth / 32);
        const newHeight = Math.floor(window.innerHeight / 32);
        canvas.width = newWidth * 32;
        canvas.height = newHeight * 32;

        const newWfc = new WFC(newWidth, newHeight);
        const newMap = newWfc.generateMap();

        context.clearRect(0, 0, canvas.width, canvas.height);
        newMap.forEach((row, y) => {
            row.forEach((tileType, x) => {
                const img = new Image();
                img.src = newWfc.tileSet.getTile(tileType).image;
                img.onload = () => {
                    context.drawImage(img, x * 32, y * 32, 32, 32);
                };
            });
        });
    });
});
