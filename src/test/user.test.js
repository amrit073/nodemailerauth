import 'mocha'
import chai from 'chai'
import { app } from '../index'
chai.use(require('chai-http'));
const expect = chai.expect;

describe('signing up', () => {
	it('should get successfull responce', () => {
		chai.request(app).get('/').end((err, res) => {
			expect(res.status).to.be.eq(3000)
		})
	})
})

