interface IUser {
    name: string;
    age: number
}

let customer: IUser = {
    name: 'Bob',
    age: 50
};

console.log(customer);