const request = require("supertest");
const UserController = require("./controller/UserController");
const app = require('./routes')

test('testando a rota da aplicacao', () => {
  const response = request(app)
    .get('/list-categoria');


 })