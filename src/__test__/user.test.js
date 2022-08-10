import { request } from 'express';
// import supertest from 'supertest';

const app = require('../app');

// eslint-disable-next-line no-undef
describe('test example', () => {
  // eslint-disable-next-line no-undef
  test('GET /', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        res.body.data.length = 1;
        res.body.data[0].name = 'Harsh Meghani';
      })
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
