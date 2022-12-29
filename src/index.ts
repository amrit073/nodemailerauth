import express from 'express';
require('dotenv').config();
const app = express();
import { router as routes } from './routes/user.routes';
import { json as _json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
app.use(express.json());
app.use(cookieParser())
app.use(_json()); // for parsing application/json
app.use(urlencoded({ extended: true }));
app.use('/', express.static('src/public'))
app.use('/api', routes)
process.on('uncaughtException', function(err) {
	console.log(err);
});

app.listen(3001, () => {
	console.log('started listening at port 3000')
})
export { app };
