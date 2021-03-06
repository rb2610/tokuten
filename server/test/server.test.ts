import server from "../src/server";
import chai from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe("Server API", () => {
  describe("scoreData", () => {
    it("should return a JSON containing score data", () => {
      return request(server)
        .get("/api/scoreData")
        .then(response => {
          expect(response).to.have.status(200);
          expect(response.body).to.deep.equal({
            data: [
              {
                id: 1,
                name: "Foo",
                wins: 5
              },
              {
                id: 2,
                name: "Roo",
                wins: 2
              }
            ]
          });
        })
        .catch(error => {
          throw error;
        });
    });
  });

  describe("status", () => {
    it("should return a status JSON", () => {
      return request(server)
        .get("/api/status")
        .then(response => {
          expect(response).to.have.status(200);
          expect(response.body).to.deep.equal({
            status: "Most Excellent"
          });
        })
        .catch(error => {
          throw error;
        });
    });
  });
});
