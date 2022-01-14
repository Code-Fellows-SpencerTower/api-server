'use strict';


const supertest = require('supertest');
// destructure app from server.js
const { app } = require('../lib/server.js');
const { db } = require('../lib/model');
const request = supertest(app); // similar to axios requests - just going to mocked server/database

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing food router', () => {

  it('Should create food data', async () => {
    // make a req using http://localhost:3000/food?food=pizza
    // grab response
    let response = await request.post('/food?name=apple&category=fruit&amount=3');
    // console.log('response: ', response.body);

    // expect response.status to equal 200
    expect(response.status).toEqual(200);
    // expect response.body to have food equal to pizza
    expect(response.body.amount).toEqual(3);
    expect(response.body.name).toEqual('apple');
  });

  it('Should read from food data', async () => {
    // make a req using http://localhost:3000/food?food=pizza
    // grab response
    let response = await request.post('/food?name=apple&category=fruit&amount=3');
    let response2 = await request.post('/food?name=kiwi&category=fruit&amount=4');
    let responseGet = await request.get('/food');
    console.log('response: ', response.body);

    // expect response.status to equal 200
    expect(responseGet.status).toEqual(200);
    // expect response.body to have food equal to pizza
    expect(responseGet.body.count).toEqual(2);
    expect(responseGet.body.results[0].name).toBeDefined();
  });

  xit('Shoud read foods from query data', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
    expect(response.body.results).toBeDefined();
  });
});