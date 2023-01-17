import App from '../app';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { response } from 'express';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testing /leaderboard endpoint', () => {
  it('Return code 200 when request on /leaderboard/home is successfull', async () => {
    const response = await chai.request(app).get('/leaderboard/home');

    expect(response.status).to.be.equal(200);
  });

  it('Return code 200 when request on /leaderboard/away is successfull', async () => {
    const response = await chai.request(app).get('/leaderboard/away');

    expect(response.status).to.be.equal(200);
  })
});