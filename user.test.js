const { fetchData } = require("./fetchData");

describe("Testing Users", () =>{
  it("should return 10 users", async () => {
    const users = await fetchData("users");
    expect(users.length).toBe(10);
  });

  it("should contain user with ID 2", async () => {
    const users = await fetchData("users");
    expect(users).toContainEqual({
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },);
  });
});
