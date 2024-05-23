export class EMPUser {
    id!: number;
    firstName!: string;
    lastName!: string;
    dateOfBirth!: Date;
    idNumber!: string;
    startDate!: Date;
    address!: string;
    phoneNumber!: string;
    image!: string;
    gender!: string;
    password!: string;
    email!: string;
    emergencyContactName!: string;
    emergencyContactRelationship!: string;
    emergencyContactNo!: string;
    deleted: boolean = false;
    role!: Role;
    position!: Position;
    department!: Department;
  }
  
  export class Department {
    departmentId!: number;
    DepartmentName!: string;
    deleted: boolean = false;
  }
  
  export class Position {
    positionId!: number;
    positionName!: string;
    salary!: number;
    deleted: boolean = false;
  }
  
  export enum Role {
    ADMIN = 'ADMIN',
    EMPLOYEE = 'EMPLOYEE'
  }
  