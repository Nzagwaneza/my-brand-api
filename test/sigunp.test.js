const app = require("../src/index");
const supertest = require("supertest");
const User = require("../src/models/Users")

describe("/Signup", () => {
  after(async ()=>{
    await User.remove({})
  })
  it("Should return 201 when a user created successfuly", async () => {
    const user = {
      name: "Test user",
      email: "test@email.com",
      password: "TestP@123",
    };
    const request = await supertest(app).post("/Users/register").send(user);
    expect(request.status).toBe(201)
  });
});
