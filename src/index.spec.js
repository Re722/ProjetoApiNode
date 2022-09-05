const request = require("supertest")
const app = require('./routes')

test('testando a rota da aplicacao', () => {
  const response = request(app)
    .get('./');

  expect(response.statusCode).toEqual("200");
  expect(response.body).toHaveProperty('HELLO');

})

// describe("Testando minha aplicacao", () => {
//   it("should get main route", async () => {
//     const res = await request(app).get('/')

//     expect(res.statusCode).toEqual('200')
//     expect(res.body).toHaveProperty('HELLO')
//   })
// })