'use strict';


const supertest = require('supertest');
// destructure app from server.js
const { app } = require('../lib/server.js');
const request = supertest(app);

describe('Testing book router', () => {

  it('Should read from book data', async () => {
    // grab response
    let response = await request.get('/');

    // expect response.status to equal 200
    expect(response.status).toEqual(200);
    // expect response.body to have clothes equal to pizza
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
});