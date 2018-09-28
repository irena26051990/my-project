export class User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    avatar: string;

    constructor(name, lastName, email, phoneNumber, avatar) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
    }
}