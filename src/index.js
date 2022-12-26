import express from 'express';
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
app.listen(3000, () => {
	console.log('started listening at port 3000')
})
