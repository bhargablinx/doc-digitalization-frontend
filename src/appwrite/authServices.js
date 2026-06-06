import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setProject(config.appwriteProjectId)
            .setEndpoint(config.appwriteUrl)
            .setDevKey(config.appwriteDevKey);

        this.account = new Account(this.client);
    }

    async signup({ name, email, password, role = "user" }) {
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name,
                role,
            });
            if (user) return user;
        } catch (error) {
            console.log("Appwrite: Signup failed");
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password,
            });
        } catch (error) {
            console.log("Appwrite: Login failed");
            throw error;
        }
    }

    async logout() {
        return await this.account.deleteSessions();
    }

    async getUser() {
        try {
            const user = await this.account.get();
            if (user) return user;
            else return console.log("User not found");
        } catch (error) {
            console.log("Appwrite: Getting user failed");
            throw error;
        }
    }
}

const authServices = new AuthService();

export default authServices;
