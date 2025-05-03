export class User {
    firstName: any;
    lastName: any;
    email: any;
    birthDate: any;
    street: any;
    zipCode: any;
    city: any;
    customIdName?: string;

    constructor(obj?: any) {
            this.firstName = obj ? obj.firstName : '';
            this.lastName = obj ? obj.lastName : '';
            this.email = obj ? obj.email : '';
            this.birthDate = obj ? obj.birthDate : '';
            this.street = obj ? obj.street : '';
            this.zipCode = obj ? obj.zipCode : '';
            this.city = obj ? obj.city : '';
            this.customIdName = obj ? obj.customIdName : '';
    }

    // public toJSON() {
    //     return {
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         email: this.email,
    //         birthDate: this.birthDate,
    //         street: this.street,
    //         zipCode: this.zipCode,
    //         city: this.city,
    //         customIdName: this.customIdName
    //     };
    // }

    public toJSON() {
        const json: any = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        };
    
        if (this.customIdName !== undefined) {
            json.customIdName = this.customIdName;
        }
    
        return json;
    }
    
}