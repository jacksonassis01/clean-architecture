import crypto from "crypto";


export default class User {
    
    constructor (
        readonly userId: string,
        readonly email: string,
        readonly passwordValue: string,
        readonly passwordType: string,
        readonly passwordSalt: string
    ) {

    }

    static create (
        email: string,
        password: string,
        passwordType: string = "pbkdf2",
        externalPasswordSalt?: string
    ) {
        const isValid = password.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/);
        
        if (!isValid) throw new Error("Invalid password");

        const passwordSalt = externalPasswordSalt || crypto.randomBytes(20).toString("hex");

        let passwordValue = "";
        
        if (passwordType === "textplain") {
            passwordValue = password;
        }
    
        if (passwordType === "md5") {
            passwordValue = crypto.createHash("md5").update(password).digest("hex");
        }
    
        if (passwordType === "pbkdf2") {
            passwordValue = crypto.pbkdf2Sync(password, passwordSalt, 100000, 64, "sha512").toString("hex");
        }

        const userId = crypto.randomUUID();

        return new User(userId, email, passwordValue, passwordType, passwordSalt);
    }

    validatePassword (password: string) {
        let isValid = false;

        if (this.passwordType === "textplain") {
            isValid = password === this.passwordValue;
        }

        if (this.passwordType === "md5") {
            isValid = crypto.createHash("md5").update(password).digest("hex") === this.passwordValue;
        }

        if (this.passwordType === "pbkdf2") {
            isValid = crypto.pbkdf2Sync(password, this.passwordSalt, 100000, 64, "sha512").toString("hex") === this.passwordValue;
        }

        return isValid;
    }
}