
const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../index");

test("GET / should return Server is running", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.equal(response.text, "Server is running");
}); 
