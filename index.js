// importing packages
const express = require('express');
const app = express();
// middlewares
app.use(express.json());
// port



app.get('/api', function (req, res) {
    console.log("Get called")
    console.log(req.body);
    
	res.status(200).json({msg: `It's a Get request.`});
})
  
app.post('/api', function (req, res) {
    console.log("Post called")
    console.log(req.body);
    
	res.status(200).json({msg: `It's a Post request.`});
})



const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));