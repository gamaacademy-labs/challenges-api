import supertest from 'supertest';
import app from '../config/server';

describe('No controller de ChallengeMaterials ao executar a função', () => {
  describe('getMaterialsByChallenge,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/materials/661d66e4-b36a-49a9-b2af-f5464ef59acb');
      expect(expectResponse.status).toBe(200);
      expect(expectResponse.body.id).toBeTruthy()
      expect(expectResponse.body.title).toBeTruthy()
      expect(expectResponse.body.link).toBeTruthy()
      expect(expectResponse.body.type).toBeTruthy()
      expect(expectResponse.body.challengeId).toBeTruthy()
      expect(expectResponse.body.createdAt).toBeTruthy()
      expect(expectResponse.body.updatedAt).toBeTruthy()
    });
    // test('Em caso de erro, retornar o status 400', async () => {
    //   const expectResponse = await supertest(app).get('/users/5b1d100a-c10f-4442-855d-9df4e5658213');
    //   expect(expectResponse.status).toBe(400);
    //   expect(expectResponse.body.message).toBe("Usuário não encontrado");
    // });
  });
});