const express = require('express')
const app = express();
const routes = require('./routes/user.routes').router;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('src/public'))
app.use('/api', routes)
app.listen(3000, () => {
	console.log('started listening at port 3000')
})
