import app from './app/app.js';

/**
 * Declaring port to listen to server 
 */

const port = 9090;

app.listen(port, () => {
    console.log(`Server running at ${port}.`); // To check if connected to server.
});