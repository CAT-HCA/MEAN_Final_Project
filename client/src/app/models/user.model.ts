// Create User Model Class
export class User {
    // properties
    public id: number;
    public user_name: string = '';
    private password: string = '';
    public email: string = '';
    public is_admin: number = 0;


    constructor(id: number, user_name: string, password: string, email: string, is_admin: number) {
        this.id = id;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.is_admin = is_admin;
    }
}