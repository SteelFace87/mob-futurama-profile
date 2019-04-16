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
        favoriteCharacter: 'Fry',
        tagline: 'cool fake tagline'
      })
      .then(() => {
        return request(app)
          .get('/profile');
      })
      .then(res => {
        expect(res.body).toHaveLength(1);
      });
  });

  it('can get a profile by id', () => {
    return Profile
      .create({
        name: 'testeeee',
        favoriteCharacter: 'Fry',
        tagline: 'cool fake tagline'
      })
      .then(createdProfile => {
        return request(app)
          .get(`/profile/${createdProfile._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'testeeee',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String),
          _id: expect.any(String)
        });
      });
  });
});
