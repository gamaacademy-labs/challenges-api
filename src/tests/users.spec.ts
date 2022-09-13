import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Users ao executar a função', () => {
  describe('getUserById,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/users/db1526a7-907f-4d47-b284-d4186e4c5c98');
      expect(expectResponse.status).toBe(200);
      expect(expectResponse.body.id).toBeTruthy()
      expect(expectResponse.body.name).toBeTruthy()
      expect(expectResponse.body.createdAt).toBeTruthy()
      expect(expectResponse.body.updatedAt).toBeTruthy()
    });
    test('Em caso de erro, retornar o status 400', async () => {
      const expectResponse = await supertest(app).get('/users/5b1d100a-c10f-4442-855d-9df4e5658213');
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Usuário não encontrado");
    });
  });
});