import User from "./User";


const sqlite3 = require('sqlite3').verbose();

export default interface UserRepository {
    saveUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
}
 
const connection = new sqlite3.Database('database.db', (err: string | undefined) => {
    if (err) {
        throw new Error(err);
    }
});

export class UserRepositoryDatabase implements UserRepository {
    
    async saveUser(user: User) {
        await connection.run(
            "insert into user (user_id, email, password_value, password_type, password_salt) values (?,?,?,?,?);",
            [user.userId, user.email, user.passwordValue, user.passwordType, user.passwordSalt]
        )
    }
    
    async getUserByEmail(email: string) {
        const [ userData ] = await connection.run("select * from user where email = ?;", [ email ]);
        return new User(
            userData.user_id,
            userData.email,
            userData.password_value,
            userData.password_type,
            userData.password_salt
        );
    }
}

export class UserRepositoryMemory implements UserRepository {
    users: any[];

    constructor() {
        this.users = [];
    }

    async saveUser(user: any) {
        this.users.push(user);
    }
    
    async getUserByEmail(email: string) {
        const user = this.users.find(user => user.email === email);
        
        return new User(
            user.userId,
            user.email,
            user.passwordValue,
            user.passwordType,
            user.passwordSalt,
        );
    }
}