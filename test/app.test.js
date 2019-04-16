const request = require('supertest');
const app = require('../lib/app');
const Profile = require('../lib/models/Profile');


describe('app routes', () => {
  beforeEach(() => {
    return Profile.drop();
  });

  it('can create a new profile', () => {
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

  it('can get a list of profiles', () => {
    return Profile
      .create({
        name: 'testeeee',
        favoriteCharacter: 'Fry'
      })
      .then(() => {
        return request(app)
          .get('/profile');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });
})
;
