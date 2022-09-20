const { fetchData } = require("./fetchData");

describe("Testing Post", () => {
  it("should retun 100 posts", async () => {
    const posts = await fetchData("posts");
    expect(posts.length).toBe(100);
  });

  it("shoul contain post with ID of 5", async() => {
    const posts = await fetchData("posts")
    expect(posts).toContainEqual({
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    });
  });
});
