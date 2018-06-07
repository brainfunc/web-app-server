const {app} = require('./../server');
const {Lead} = require('./../models/lead');
// Mocha is a framework so no need to require
// Assertions library useful for managing expectations and assertions
const { expect, assert, should } = require('chai');
// Useful for testing http requests
const request = require('supertest');
const lodash = require('lodash');
const {ObjectID} = require('mongodb');

const leads = [{
  _id: new ObjectID(),
  email: 'samplelead@example.com'
}];

// Setting up before running each it block
beforeEach((done) => {
  Lead.remove({}).then(() => {
    Lead.insertMany(leads)
  }).then(() => done());
});

// POST /todos testing methods
describe('POST /leads', () => {

  it('should create a new lead with email', (done) => {
    done();
  });

});
