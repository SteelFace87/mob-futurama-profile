const request = require('supertest');
const app = require('../lib/app');
const Profile = require('../lib/models/Profile');


describe('app routes', () => {
  beforeEach(() => {
    return Profile.drop();
  });
  
  it('can create a new profile', ()=>{
    return request(app)
      .post('/profile')
      .send({
        name: 'test person',
        favoriteCharacter: 'fry'    
      })
      .then(res=>{
        expect(res.body).toEqual({
          name: 'test person',
          favoriteCharacter: 'fry',
          tagline: expect.any(String),
          _id: expect.any(String)
        });
      });
  });
})
;
