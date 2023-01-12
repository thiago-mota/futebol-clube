import App from '../app';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testing /teams endpoint', () => {
  it('Status 200 if querie is successful', async () => {
    const response = await chai
      .request(app)
      .get('/teams');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.lengthOf(16)
  });

  it('Returns all registered teams', async () => {
    const response = await chai
      .request(app)
      .get('/teams');

    expect(response.body).to.have.lengthOf(16)
  });
});

describe('Testing /teams/:id endpoint', () => {
  it('Status 200 if querie is successful', async () => {
    const response = await chai
      .request(app)
      .get('/teams/:id')

    expect(response.status).to.be.equal(200);
  });

  it('Returns id and name from a single team by his id', async () => {
    const response = await chai
      .request(app)
      .get('/teams/1');

    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('teamName');
  });
});
