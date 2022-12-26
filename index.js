const express = require('express')
const app = express();
const routes = require('./routes/user.routes').router;

app.use(express.json());
app.use('/', express.static('public'))
app.use('/api', routes)
app.listen(3000, () => {
	console.log('started listening at port 3000')
})
