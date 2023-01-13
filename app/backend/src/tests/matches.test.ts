import App from '../app';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { response } from 'express';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testing /matches endpoint', () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.dXNlckB1c2VyLmNvbQ.8yAUgfpLRsTuqgg-Yj3YeO66h8PxSQdx1y641jX4JpM';
  const invalidToken = 'eyJhbGciOiJIUzI1NiJ9.dXNlckB1c2VyLmNvbQ.8yAUgfpLRsTuqgg-O66h8PxSQdx1y4JpM';

  it('Retrieves all games', async () => {
    const response = await chai
      .request(app)
      .get('/matches');

      expect(response.body).to.have.lengthOf(48);
  });
  
  it('Retrieves all games currently in progress', async () => {
    const response = await chai.request(app).get('/matches?inProgress=true');

    expect(response.body).to.have.lengthOf(8)
  });

  it('Retrieves all games not currently in progress', async () => {
    const response = await chai.request(app).get('/matches?inProgress=false');

    expect(response.body).to.have.lengthOf(40);
  });

  it('Status 401 if token was not found', async () => {
    const response = await chai.request(app).post('/matches').send({
      'homeTeam': 16,
      'awayTeam': 8,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })

    expect(response.status).to.be.equal(401);
  })

  it('Status 401 if token is not valid', async () => {
    const response = await chai.request(app).post('/matches').set('Authorization', invalidToken).send({
      'homeTeam': 16,
      'awayTeam': 8,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })
    
    expect(response.status).to.be.equal(401);
  });

  it('Status 422 if both added teams are equal', async () => {
    const response = await chai.request(app).post('/matches').set('Authorization', token).send({
      'homeTeam': 10,
      'awayTeam': 10,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })

    expect(response.status).to.be.equal(422);
  })

  it('Status 404 if home team does not exist', async () => {
    const response = await chai.request(app).post('/matches').set('Authorization', token).send({
      'homeTeam': 255,
      'awayTeam': 10,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })

    expect(response.status).to.be.equal(404);
  })

  it('Status 404 if away team does not exist', async () => {
    const response = await chai.request(app).post('/matches').set('Authorization', token).send({
      'homeTeam': 10,
      'awayTeam': 255,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })

    expect(response.status).to.be.equal(404);
  })

  it('Status 201 if match was added correctly', async () => {
    const response = await chai.request(app).post('/matches').set('Authorization', token).send({
      'homeTeam': 8,
      'awayTeam': 16,
      'homeTeamGoals': 2,
      'awayTeamGoals': 2
    })

    expect(response.status).to.be.equal(201);
  })
});