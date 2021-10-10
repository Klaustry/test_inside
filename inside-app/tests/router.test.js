const request = require("supertest");

var app = require("../index").app;
var tokenJwt = "";

it("Проверка корневого запроса", (done) => {
  request(app).get("/").expect("App worked!").end(done);
});

describe("Проверка роутов АВТОРИЗАЦИИ", () => {
  it("ПРОВЕРКА НА СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ /api/auth/signup", function (done) {
    const res = request(app)
      .post("/api/auth/signup")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        username: "admin",
        password: "12345678",
      })
      //.expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        done();
      });

    //console.log(res);
  });

  it("ПРОВЕРКА НА АВТОРИЗАЦИЮ /api/auth/signin", function (done) {
    const res = request(app)
      .post("/api/auth/signin")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        username: "admin",
        password: "12345678",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        tokenJwt = res.body.token;
        done();
      });

    //console.log(res);
  });
});

describe("Проверка роутов АВТОРИЗОВАННОГО ПОЛЬЗОВАТЕЛЯ", () => {
  it("ПРОВЕРКА НА ДОБАВЛЕНИЕ СООБЩЕНИЯ ПОЛЬЗОВАТЕЛЕМ GET /api/test/create-message", function (done) {
    const res = request(app)
      .get("/api/test/create-message")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${tokenJwt}`)
      .send({
        username: "admin",
        message: "12345678",
      })
      //.expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        done();
      });

    //console.log(res);
  });
  it("ПРОВЕРКА НА ВЫВОД ПОЛЕДНИХ СООБЩЕНИЙ ПОЛЬЗОВАТЕЛЯ GET /api/test/get-messages", function (done) {
    const res = request(app)
      .get("/api/test/get-messages")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("authorization", "Bearer " + tokenJwt)
      .send({
        username: "admin",
        message: "history 10",
      })
      //.expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        done();
      });

    //console.log(res);
  });
});
