import User from "../src/User";


test("Deve criar um usuário", function() {
    const user = User.create("john.doe@gmail.com", "asdQRT123!@#");
    expect(user).toBeDefined();
});

test("Não deve criar um usuário com senha inválida", function () {
    expect(() => User.create("john.doe@gmail.com", "123456")).toThrow(new Error("Invalid password"));
});

test("Deve validar a senha do usuário em textplain", function() {
    const user = User.create("john.doe@gmail.com", "asdQRT123!@#", "textplain");
    const isValid = user.validatePassword("asdQRT123!@#");
    expect(isValid).toBe(true);
    expect(user.passwordValue).toBe("asdQRT123!@#");
});

test("Deve validar a senha do usuário em md5", function() {
    const user = User.create("john.doe@gmail.com", "asdQRT123!@#", "md5");
    const isValid = user.validatePassword("asdQRT123!@#");
    expect(isValid).toBe(true);
    expect(user.passwordValue).toBe("faaad3bd0683606cc2d2f1ff1592a586");
});

test("Deve validar a senha do usuário em pbkdf2", function() {
    const user = User.create("john.doe@gmail.com", "asdQRT123!@#", "pbkdf2", "123456");
    const isValid = user.validatePassword("asdQRT123!@#");
    expect(isValid).toBe(true);
    expect(user.passwordValue).toBe("e1416e96369f08cc628bbb0265173ae8d7eb53e4bdab6becd4a46d2daf333e4091453a7ab63fc42f92146e769f100f5cb9e88a46858a8bdc490938a3cc8372a8");
});

test("Não deve validar a senha do usuário", function() {
    const user = User.create("john.doe@gmail.com", "asdQRT123!@#");
    const isValid = user.validatePassword("123456");
    expect(isValid).toBe(false);
});
