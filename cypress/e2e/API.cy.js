import user from "../fixtures/users";

describe("petstore api test", () => {
  it("should create user", () => {
    cy.createUser();
  });

  it("should update user", () => {
    cy.createUser();
    cy.request("PUT", `/${user.username}`, {
      id: 51,
      username: "Olga",
      firstName: "Lus",
      lastName: "Dmi",
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "51",
      });
    });
  });

  it("should delete user", () => {
    cy.createUser();
    cy.request("DELETE", `/${user.username}`).then((response) => {
      expect(response.status).be.eql(200);
    });
  });
});
