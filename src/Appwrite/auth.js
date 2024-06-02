
// import conf from "../conf/conf.js";
// import { Client, Account, ID } from "appwrite";


// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appWriteURl)
//             .setProject(conf.appWriteProjectID);
//         this.account = new Account(this.client)
//     }

//     async createAccount({ email, name, password }) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, name, password)
//             if (userAccount) {
//                 // return userAccount
//                 // call another method 
//                 return this.login({ email, password })
//             } else {
//                 return userAccount;
//             }
//         } catch (error) {
//             throw error
//         }
//     }


//     async login({email, password}) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get()
//         } catch (error) {
//             throw error
//         }
//         return null
//     }

//     async logOut() {
//         try {
//             await this.account.deleteSessions()
//         } catch (error) {
//             throw error
//         }
//     }
// }

// const authService = new AuthService()

// export default authService


import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteURl)
            .setProject(conf.appWriteProjectID);
        this.account = new Account(this.client)
    }

    async createAccount({ email, name, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            // Create a new session using email and password
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
