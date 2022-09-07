const request = require("supertest");
const UserController = require("./controller/CategoriasController");
const app = require('./routes')

test('testando a rota da aplicacao', () => {
  const response = request(app)
    .get('/list-categoria');


 })