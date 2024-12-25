import { UserRepositoryMemory } from "../src/UserRepository";
import UserService from "../src/UserService";


let userService: UserService;

beforeEach(() => {
    //const userRepository = new UserRepositoryDatabase();
    const userRepository = new UserRepositoryMemory();
    userService = new UserService(userRepository);
});

test("Deve fazer a criação da conta do usuário", async function () {
    const inputSignup = {
        email: `john.doe${Math.random()}@gmail.com`,
        password: "asdQWE123!@#"
    }

    const outputSignup = await userService.signup(inputSignup);
    expect(outputSignup.userId).toBeDefined();
});

test("Não deve fazer a criação da conta de usuário se a senha estiver inválida", async function () {
    const inputSignup = {
        email: `john.doe${Math.random()}@gmail.com`,
        password: "123456"
    }
    
    await expect(() => userService.signup(inputSignup)).rejects.toThrow(new Error("Invalid password"));
});

test("Deve fazer o login", async function () {
    const inputSignup = {
        email: `john.doe${Math.random()}@gmail.com`,
        password: "asdQWE123!@#"
    }

    await userService.signup(inputSignup);

    const inputLogin = {
        email: inputSignup.email,
        password: "asdQWE123!@#"
    }

    const outputLogin = await userService.login(inputLogin);
    
    expect(outputLogin.token).toBeDefined();
});

test("Não deve fazer o login com a senha errada", async function() {
    const inputSignup = {
        email: `john.doe${Math.random()}@gmail.com`,
        password: "asdQWE123!@#"
    }

    await userService.signup(inputSignup);

    const inputLogin = {
        email: inputSignup.email,
        password: "123456"
    }
    
    await expect(() => userService.login(inputLogin)).rejects.toThrow(new Error("Authentication failed"));
})