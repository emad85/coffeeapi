const request = require('supertest');
const app = require('../src/server').default;
import {expect} from 'chai';

describe('api /coffee/machines', ()=> { 

	it('Get /coffee/machines', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/machines')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(9);
			done()
		});
	});
	it('Get /coffee/machines?productType=large', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/machines?productType=large')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(3);
			done()
		});
	});
	it('Get /coffee/machines?productType=espresso', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/machines?productType=espresso')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(3);
			done()
		});
	});
	it('Get /coffee/machines?productType=espresso&waterLineCompatible', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/machines?productType=espresso&waterLineCompatible=true')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(1);
			done()
		});
	});
	it('Get /coffee/machines?productType=espresso&waterLineCompatible not valid value', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/machines?productType=espresso&waterLineCompatible=notboolen')
		.expect('Content-Type', /json/)
		.expect(422)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(1);
			done()
		});
	});
});
