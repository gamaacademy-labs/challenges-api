import supertest from 'supertest';
import app from '../config/server';

describe('No controller de UserDeliverables ao executar a função', () => {
  describe('includeUserDeliverable,', () => {
    const link = 'www.google.com';
    const explanation = 'bla bla bla';
    
    test('Em caso de sucesso, retornar o status 201', async () => {
      const expectResponse = await supertest(app).post('/userdeliverable/13967613-da69-4c55-9fbd-d3d731bfff9a/deliverable')
      .query({
        userId: '2ee62d21-8957-4004-a3d5-b7f8220354b9'
      })
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(201);
      expect(expectResponse.body.id).toBeTruthy();
      expect(expectResponse.body.challengeDeliverableId).toBeTruthy();
      expect(expectResponse.body.userChallengeId).toBeTruthy();
      expect(expectResponse.body.link).toBeTruthy();
      expect(expectResponse.body.explanation).toBeTruthy();
      expect(expectResponse.body.updatedAt).toBeTruthy();
      expect(expectResponse.body.createdAt).toBeTruthy();
    });

    test('Caso o desafio não tenha sido iniciado pelo usuário, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).post('/userdeliverable/13967613-da69-4c55-9fbd-d3d731bfff9a/deliverable')
      .query({
        userId: 'db1526a7-907f-4d47-b284-d4186e4c5c98'
      })
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Desafio não iniciado pelo usuário");
    });

    test('Caso o desafio já tenha sido finalizado pelo usuário, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).post('/userdeliverable/13967613-da69-4c55-9fbd-d3d731bfff9a/deliverable')
      .query({
        userId: 'e5663bae-95b9-4a36-a836-2006a3bc0453'
      })
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Desafio já finalizado");
    });

    test('Caso a data limite de entrega do desafio já tenha passado, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).post('/userdeliverable/eca72141-0be4-455f-bbb1-e38c6668af69/deliverable')
      .query({
        userId: 'e5663bae-95b9-4a36-a836-2006a3bc0453'
      })
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Data limite para finalizar o desafio ultrapassada");
    });
  });

  describe('updateUserDeliverable,', () => {
    const link = 'www.youtube.com';
    const explanation = 'bla bla';
    
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).put('/userdeliverable/eaac6341-e1c0-49fa-98cc-7b8da30cbebd/refresh')
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(200);
    });

    test('Caso o desafio não tenha sido iniciado pelo usuário, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).put('/userdeliverable/1546175b-6496-4662-a7e6-355e2f25983b/refresh')
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Entrega do usuário não encontrada");
    });

    test('Caso o desafio já tenha sido finalizado pelo usuário, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).put('/userdeliverable/3a294f0b-725b-4c87-baed-2516a9efe41b/refresh')
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Desafio já finalizado");
    });

    test('Caso a data limite de entrega do desafio já tenha passado, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).put('/userdeliverable/1fa3139a-c7ca-48fc-8aa8-be63e383a684/refresh')
      .send({
        link, 
        explanation
      });
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Data limite para finalizar o desafio ultrapassada");
    });
  });

  describe('getUserDeliverableById,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/userdeliverable/eaac6341-e1c0-49fa-98cc-7b8da30cbebd');
      expect(expectResponse.status).toBe(200);
      expect(expectResponse.body.id).toBeTruthy();
      expect(expectResponse.body.challengeDeliverableId).toBeTruthy();
      expect(expectResponse.body.userChallengeId).toBeTruthy();
      expect(expectResponse.body.link).toBeTruthy();
      expect(expectResponse.body.explanation).toBeTruthy();
      expect(expectResponse.body.updatedAt).toBeTruthy();
      expect(expectResponse.body.createdAt).toBeTruthy();
    });

    test('Caso o userDeliverableId não seja válido, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).get('/userdeliverable/1546175b-6496-4662-a7e6-355e2f25983b');
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Entrega do usuário não encontrada");
    });
  });

  describe('getUserDeliverablesByUserChallengeId,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/userdeliverables/d42403b2-a25d-4f02-9b4e-997fa9f9ada0');
      expect(expectResponse.status).toBe(200);
      expect(typeof expectResponse.body).toBe("object");
    });

    test('Caso não haja entregas do usuário para o desafio em questão, mostrar mensagem de erro, com o status 400', async () => {
      const expectResponse = await supertest(app).get('/userdeliverables/4b382f0e-9a99-45c0-9f4f-d918797c3cf2');
      expect(expectResponse.status).toBe(400);
      expect(expectResponse.body.message).toBe("Ainda não há entregas deste usuário para este desafio");
    });
  });
});