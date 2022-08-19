import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { UserDTO } from './dto/users';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }
  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(user: UserDTO): Promise<User> {
    const { email, name, password } = user;
    return this.userRepository.create(user);
  }
}
