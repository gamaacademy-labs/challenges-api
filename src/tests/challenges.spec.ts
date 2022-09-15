import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Challenges ao executar a função', () => {
  describe('getChallengeById,', () => {
    const expected = [
        {
          "id": "13967613-da69-4c55-9fbd-d3d731bfff9an",
          "title": "Pellentesque est dolor",
          "description": "Mauris sed condimentum nisl, sed lobortis nibh. Phasellus ultricies scelerisque velit ornare finibus.",
          "averageTime": 45,
          "challengeId": "661d66e4-b36a-49a9-b2af-f5464ef59acb",
          "createdAt": "2022-09-14T13:21:58.000Z",
          "updatedAt": "2022-09-14T13:21:58.000Z",
          "challenge_id": "661d66e4-b36a-49a9-b2af-f5464ef59acb"
        }
      ]
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/challenges/661d66e4-b36a-49a9-b2af-f5464ef59acb');
      expect(expectResponse.status).toBe(200);
      expect(expectResponse.body.id).toBeTruthy();
      expect(expectResponse.body.title).toBeTruthy();
      expect(expectResponse.body.description).toBeTruthy();
      expect(expectResponse.body.thumbnail).toBeTruthy();
      expect(expectResponse.body.level).toBeTruthy();
      expect(expectResponse.body.instruction).toBeTruthy();
      expect(expectResponse.body.tags).toBeTruthy();
      expect(expectResponse.body.score).toBeTruthy();
      expect(expectResponse.body.answers).toBeTruthy();
      expect(expectResponse.body.startedAt).toBeTruthy();
      expect(expectResponse.body.finishAt).toBeTruthy();
      expect(expectResponse.body.createdAt).toBeTruthy();
      expect(expectResponse.body.updatedAt).toBeTruthy();
      expect([
        {
            "id": "13967613-da69-4c55-9fbd-d3d731bfff9an",
            "title": "Pellentesque est dolor",
            "description": "Mauris sed condimentum nisl, sed lobortis nibh. Phasellus ultricies scelerisque velit ornare finibus.",
            "averageTime": 45,
            "challengeId": "661d66e4-b36a-49a9-b2af-f5464ef59acb",
            "createdAt": "2022-09-14T13:21:58.000Z",
            "updatedAt": "2022-09-14T13:21:58.000Z",
            "challenge_id": "661d66e4-b36a-49a9-b2af-f5464ef59acb"
        }
      ]).toEqual(expect.arrayContaining(expected))
    });

    test('Em caso de erro, retornar o status 400', async () => {
      const expectResponse = await supertest(app).get('/challenges/2a013a9c-3f8d-4608-92c0-db872642212f');
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Desafio não encontrado");
    }); 
  });

  describe('getAllChallenges,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/challenges');
      expect(expectResponse.status).toBe(200);
    });
  });
});