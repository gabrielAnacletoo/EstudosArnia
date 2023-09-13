interface UserType {
    name: string;
    email: string;
    password: string;
}

interface ErrorType {
    error: string
    status: number
}

interface UserRepository {
    FindById(id: string): Promise<UserType | null>;
    FindByEmail(email: string): Promise<UserType | null>;
    Create(data: UserType): Promise<UserType | null>;
    FindAll(): Promise<UserType[]>;
}

interface UserService {
    FindAll(): Promise<UserType[]>;
    CreateService(data: UserType): Promise<UserType | null>;
}

interface ErrorResponse {
    error: string;
    status: number;
  }