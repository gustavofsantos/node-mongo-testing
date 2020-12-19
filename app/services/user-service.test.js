const { UserService } = require("./user-service");

describe(UserService.name, () => {
  test("should list all users", async () => {
    const userService = new UserService();
    await userService.connect();

    const allUsers = await userService.listAll();

    expect(allUsers.length).toBe(3);
  });
});
