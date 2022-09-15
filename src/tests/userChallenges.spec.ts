import supertest from 'supertest';
import app from '../config/server';

describe('No controller de userChallenges ao executar a função', () => {
    describe('getScoresByChallenge,', () => {

      test('Em caso de sucesso, retornar o status 200', async () => {
        const expectResponse = await supertest(app).get('/challenge/661d66e4-b36a-49a9-b2af-f5464ef59acb/ranking');
        expect(expectResponse.status).toBe(200);
        
          });
          test('Em caso de erro, retornar o status 400', async () => {
            const expectResponse = await supertest(app).get('/challenge/e3c0ea2a-f23e-4c47-bfc9-37563faf11d6/ranking');
            expect(expectResponse.status).toBe(400);
            expect(expectResponse.body.message).toBe('Desafio não encontrado');
          });

        
    });
    describe('getUserChallenge,', () => {

      test('Em caso de sucesso, retornar o status 200', async () => {
        const expectResponse = await supertest(app).get('/userChallenge/661d66e4-b36a-49a9-b2af-f5464ef59acb')
        .query({
           userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9"
          });
        expect(expectResponse.status).toBe(200);
        expect(expectResponse.body.id).toBeTruthy();
        //expect(expectResponse.body.score).toBeTruthy();
        expect(expectResponse.body.startedAt).toBeTruthy();
        //expect(expectResponse.body.finishedAt).toBeTruthy();
        expect(expectResponse.body.challengeId).toBeTruthy();
        expect(expectResponse.body.userId).toBeTruthy();
        //expect(expectResponse.body.user).toBeTruthy();
  
  
    });
      test('Em caso de erro, retornar o status 400', async () => {
         const expectResponse = await supertest(app).get('/userChallenge/e3c0ea2a-f23e-4c47-bfc9-37563faf11d6')
        .query({
          userId: "e5663bae-95b9-4a36-a836-2006a3bc0453"
         });
        expect(expectResponse.status).toBe(400);
        expect(expectResponse.body.message).toBe("Desafio não encontrado");
    });
    test('Em caso de erro, retornar o status 400', async () => {
      const expectResponse = await supertest(app).get('/userChallenge/661d66e4-b36a-49a9-b2af-f5464ef59acb')
     .query({
       userId: "f9fcf944-7a48-4867-9afa-9a299439e3df"
      });
     expect(expectResponse.status).toBe(400);
     expect(expectResponse.body.message).toBe("Usuário não encontrado");
  });
  test('Em caso de erro, retornar o status 400', async () => {
    const expectResponse = await supertest(app).get('/userChallenge/661d66e4-b36a-49a9-b2af-f5464ef59acb')
   .query({
     userId: "db1526a7-907f-4d47-b284-d4186e4c5c98"
    });
   expect(expectResponse.status).toBe(400);
   expect(expectResponse.body.message).toBe("Desafio não iniciado pelo usuário");
  });
  });
    describe('endChallenge,', () => {
    
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).put('/userchallenge/be9316ba-90de-4860-90a4-d4bb8e1846db/end')
      .query({
        userId: "e5663bae-95b9-4a36-a836-2006a3bc0453"
      });
         expect(expectResponse.status).toBe(200);
    });
  
    test('Em caso de erro, retornar o status 400', async () => {
      const expectResponse = await supertest(app).put('/userChallenge/8d715f99-ea93-4433-bb0f-e26fcb66e22e/end')
     .query({
       userId: "e5663bae-95b9-4a36-a836-2006a3bc0453"
      });
     expect(expectResponse.status).toBe(400);
     expect(expectResponse.body.message).toBe("Desafio não encontrado");
    });
    test('Em caso de erro, retornar o status 400', async () => {
      const expectResponse = await supertest(app).put('/userChallenge/be9316ba-90de-4860-90a4-d4bb8e1846db/end')
     .query({
       userId: "02d85a36-b0c6-4c30-9530-97c14a0af9c2"
      });
     expect(expectResponse.status).toBe(400);
     expect(expectResponse.body.message).toBe("Usuário não encontrado");
    });

  //   test('Caso a data limite de entrega do desafio já tenha passado, mostrar mensagem de erro, com o status 400', async () => {
  //     const expectResponse = await supertest(app).post('/userChallenge/be9316ba-90de-4860-90a4-d4bb8e1846db/end')
  //     .query({
  //       userId: 'db1526a7-907f-4d47-b284-d4186e4c5c98'
  //     })
  //           expect(expectResponse.status).toBe(400);
  //     expect(expectResponse.body.message).toBe("Data limite para finalizar o desafio ultrapassada");
  //   });
  //  });
  });

describe('startChallenge,', () => {
    
  test('Em caso de sucesso, retornar o status 201', async () => {
    const expectResponse = await supertest(app).post('/userchallenge/886471b9-00df-4a9d-9138-4fbe703c9569/start')
    .query({
      userId: 'db1526a7-907f-4d47-b284-d4186e4c5c98'
    });
       expect(expectResponse.status).toBe(201);
  });

  // test('Em caso de erro, retornar o status 400', async () => {
  //   const expectResponse = await supertest(app).post('/userChallenge/926ad065-6dd1-4add-ad90-91440b97172d/start')
  //  .query({
  //    userId: "e5663bae-95b9-4a36-a836-2006a3bc0453"
  //   });
  //  expect(expectResponse.status).toBe(400);
  //  expect(expectResponse.body.message).toBe("Este desafio não tem data de início");

})
test('Em caso de erro, retornar o status 400', async () => {
  const expectResponse = await supertest(app).post('/userChallenge/78382a91-5583-45a0-b0e8-f1620918aa50/start')
 .query({
   userId: "db1526a7-907f-4d47-b284-d4186e4c5c98"
  });
 expect(expectResponse.status).toBe(400);
 expect(expectResponse.body.message).toBe("Você ainda não tem permissão para iniciar esse desafio.");
});

test('Em caso de erro, retornar o status 400', async () => {
  const expectResponse = await supertest(app).post('/userChallenge/be9316ba-90de-4860-90a4-d4bb8e1846db/start')
 .query({
   userId: "db1526a7-907f-4d47-b284-d4186e4c5c98"
  });
 expect(expectResponse.status).toBe(400);
 expect(expectResponse.body.message).toBe("Desafio já foi iniciado");
});

test('Em caso de erro, retornar o status 400', async () => {
  const expectResponse = await supertest(app).post('/userChallenge/e36a96cc-89b1-446b-acfb-eed68c0a261a/start')
 .query({
   userId: "db1526a7-907f-4d47-b284-d4186e4c5c98"
  });
 expect(expectResponse.status).toBe(400);
 expect(expectResponse.body.message).toBe("Desafio não encontrado");
});

test('Em caso de erro, retornar o status 400', async () => {
  const expectResponse = await supertest(app).post('/userChallenge/be9316ba-90de-4860-90a4-d4bb8e1846db/start')
 .query({
   userId: "bfe81288-949a-4fd3-9fcd-c90288503abe"
  });
 expect(expectResponse.status).toBe(400);
 expect(expectResponse.body.message).toBe("Usuário não encontrado");
});

})

