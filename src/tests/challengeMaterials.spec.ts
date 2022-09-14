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
    });
  });
});
