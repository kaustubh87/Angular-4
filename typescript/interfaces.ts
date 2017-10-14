interface User{
    username: string;
    password: string;
    confirmPassword?: string; // Optional property 
}

let user: User;

user = {username: 'max', password: 'supersecret' };

