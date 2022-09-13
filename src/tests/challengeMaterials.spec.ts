import supertest from 'supertest';
import app from '../config/server';

describe('No controller de ChallengeMaterials ao executar a função', () => {
  describe('getMaterialsByChallenge,', () => {
    const expected = [
      {
        "id": "7dbd8f91-0271-4f49-81a1-a5d1aba2a829",
        "title": "video1",
        "link": "www.google.com",
        "type": "link",
        "challengeId": "661d66e4-b36a-49a9-b2af-f5464ef59acb",
        "createdAt": "2022-09-13T19:02:17.000Z",
        "updatedAt": "2022-09-13T19:02:17.000Z"
      }
    ]
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/materials/661d66e4-b36a-49a9-b2af-f5464ef59acb');
      expect([
        {
          "id": "7dbd8f91-0271-4f49-81a1-a5d1aba2a829",
          "title": "video1",
          "link": "www.google.com",
          "type": "link",
          "challengeId": "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          "createdAt": "2022-09-13T19:02:17.000Z",
          "updatedAt": "2022-09-13T19:02:17.000Z"
        }
      ]).toEqual(expect.arrayContaining(expected))
      // expect(expectResponse.status).toBe(200);
      // expect(expectResponse.body.id).toBeTruthy()
      // expect(expectResponse.body.title).toBeTruthy()
      // expect(expectResponse.body.link).toBeTruthy()
      // expect(expectResponse.body.type).toBeTruthy()
      // expect(expectResponse.body.challengeId).toBeTruthy()
      // expect(expectResponse.body.createdAt).toBeTruthy()
      // expect(expectResponse.body.updatedAt).toBeTruthy()
    });
  });
});


// describe('arrayContaining', () => {
//   const expected = ['Alice', 'Bob'];
//   it('matches even if received contains additional elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//   });
// });