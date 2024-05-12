export interface Student {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    gender: string,
    address: string,
    phone_number: string
}

export interface StudentsResponse {
    data: Student[];
}