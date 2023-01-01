import chai from 'chai'
import { app } from '../index'
import { update, create, fetch } from '../auth/services/useractions';
import chaihttp = require('chai-http')
chai.use(chaihttp);
const expect = chai.expect;

/** @type {import("express").RequestHandler} */

describe('signing up', () => {
	it('request to homepage should get successfull responce', (done) => {
		chai.request(app).get('/').end((err, res) => {
			if (err) done(err)
			expect(res.status).to.be.eq(200)
			done();
		})
	})

})


describe('testing user services ', () => {

	it('creating  users with valid object should return string', (done) => {
		create({ username: 'test', password: 'test', email: 'a@a.com' })
			.then(res => {
				chai.expect(res).to.be.a('string')
				done();
			}).catch(err => done(err))
	})

	it('feching users with valid object should return  object', (done) => {
		fetch(1).then((res) => {
			expect(res).to.be.a('object')
			done();
		}).catch(err => done(err))
	})


	it('updating users with valid id and update should return object with updated value', (done) => {
		update(1, { username: 'thisistest' }).then(res => {
			expect(res.get('username')).to.be.eq('thisistest')
			done()
		}).catch(err => done(err))
	})


})


describe('testing user routes', () => {
	it('posting to /api/create should give valid response with text containing email link', (done) => {
		const body = {
			username: 'testuser073', password: 'testpassword', email: 'email@test.com'
		}
		chai.request(app).post('/api/create').send(body)
			.end((err, res) => {
				if (err) done(err)
				expect(res.status).to.be.eq(200)
				expect(res.text).to.be.a('string')
				done();
			})
	})

	it('requestin protected routes without cookie or param should redirect me to home ', (done) => {
		chai.request(app).get('/api/protected').end((err, res) => {
			if (err) done(err);
			expect(res.redirects).to.be.a('array')
			expect(res.redirects[0]).to.be.a('string')
			expect(res.redirects[1]).to.be.undefined;
			done()

		})
	})
	//
	// it('requestin protected routes unverified user should redirect me home', async () => {
	// 	const res = await chai.request(app).get('/api/protected')
	// 	expect(res.redirects).to.be.a('array')
	// 	expect(res.redirects[0]).to.be.a('string')
	// 	expect(res.redirects[1]).to.be.undefined;
	// })

	it('requestin protected routes with invalid id param should redirect me to home  ', async () => {
		const res = await chai.request(app).get('/api/protected?id=66')
		expect(res.redirects).to.be.a('array')
		expect(res.redirects[0]).to.be.a('string')
		expect(res.redirects[1]).to.be.undefined;
	})

	it('requestin protected routes with cookie or param should welcome me', async () => {
		const res = await chai.request(app).get('/api/protected?id=1')
		expect(res.text.split(' ')[0]).to.be.eq('hello')
	})


	it('requesting to /create/verify with valid id and code should redirect me', async () => {
		const res = await chai.request(app).get('/api/verify?code=6822&id=46')
		expect(res.redirects).to.be.a('array')
		expect(res.redirects[0]).to.be.a('string')
	})
	it('requesting to /create/verify with valid id and code should redirect me', async () => {
		const res = await chai.request(app).get('/api/verify?code=6822&id=46')
		expect(res.redirects).to.be.a('array')
		expect(res.redirects[0]).to.be.a('string')
	})

	it('requesting to /create/verify with invalid id should tell me to get my code right', async () => {
		const res = await chai.request(app).get('/api/verify?code=6822&id=45')
		expect(res.redirects[0]).to.be.undefined;
		expect(res.text).to.be.eq('please sign up')
	})
})


