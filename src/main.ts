import express from 'express';
import UserService from './UserService';
import { UserRepositoryDatabase } from './UserRepository';


const app = express();
app.use(express.json());

const userRepository = new UserRepositoryDatabase();
const userService = new UserService(userRepository);

app.post("/signup", async function (request, response) {
    try {
        const input = request.body;
        const output = await userService.signup(input);
        response.json(output);
    } catch (e: any) {
        response.status(422).json({
            message: e.message
        })
    }
});

app.post("/login", async function (request, response) {
    try {
        const input = request.body;
        const output = await userService.login(input);
        response.json(output);
    } catch (e: any) {
        response.status(401).json({
            message: e.message
        })
    }
});