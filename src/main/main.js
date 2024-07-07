// src/main/main.js

import WFC from '../wfc/WFC.js';

/**
 * Main function to initialize tile set and generate map using WFC.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize the map
    const initializeMap = () => {
        // Get the size of the browser window
        const width = Math.floor(window.innerWidth / 128); // 32 is the tile size
        const height = Math.floor(window.innerHeight / 128); // 32 is the tile size

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

        // Clear previous map
        document.body.innerHTML = '';
        document.body.appendChild(canvas);
    };

    // Initialize the map on load
    initializeMap();

    // Handle window resize to dynamically adjust the map size
    window.addEventListener('resize', initializeMap);
});
