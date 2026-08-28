//Pakage Imports
const app = require('express');


//server set up
const server = app();
const PORT = 1286;
const HOSTNAME = '0.0.0.0';
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running in ${HOSTNAME}:${PORT}`);
});