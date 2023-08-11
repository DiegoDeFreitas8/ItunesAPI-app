const express = require('express');
const app = express();
const helmet = require('helmet');
const PORT = process.eventNames.PORT || 8000; 
const cors = require("cors");
app.use(cors())
app.use(helmet());



//created the get function that uses the term and media from 
//my frontend and puts it into the api to search for what is needed
app.get('/search', async (req, res) => {
    const term = req.query.term
    const entity = req.query.media
    console.log(term)
    console.log(entity)

    const api_url = `https://itunes.apple.com/search?term=${term}&media=${entity}`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    res.send(json);
    
});





//used .listen to listen on the port number i created
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
} )