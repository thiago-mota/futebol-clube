import App from '../app';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testing login endpoint', () => {
  it('Status 200 if email and password are valid', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'secret_admin'
      });

    expect(response.status).to.be.equal(200)
  });

  it('Status 401 if email is not valid', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'xablau@xablau.com',
        password: 'secret_admin'
      });

    expect(response.status).to.be.equal(401);
  });

  it('Status 401 if password is not valid', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'xablau'
      });

    expect(response.status).to.be.equal(401);
  });

  it('Status 400 if no email is provided', async () => {
    const response = await chai
    .request(app)
    .post('/login')
    .send({
      password: 'xablau'
    });

  expect(response.status).to.be.equal(400);
  })
});
