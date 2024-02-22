export interface InputCreateCustomerDto {
    name: string;
    address: {
        street: string;
        number: number;
        zip: string;
        city: string;
    };
}

export interface OutpuCreateCustomerDto {
    id: string;
    name: string;
    address: {
        street: string;
        number: number;
        zip: string;
        city: string;
    };
}