import User from "./User";
import { createToken } from "./TokenValidator";
import UserRepository from "./UserRepository";


export default class UserService {

    constructor(readonly userRepository: UserRepository) {
    }

    async signup(input: any) {
        const user = User.create(input.email, input.password);
        await this.userRepository.saveUser(user);

        return { userId: user.userId }
    }

    async login(input: any) {
        const user = await this.userRepository.getUserByEmail(input.email);

        if (!user.validatePassword(input.password)) {
            throw new Error("Authentication failed");
        } else {
            const token = createToken(user.email, "secret");
            return { token };
        }

    }
}