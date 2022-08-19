import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO, UserSignInDTO } from 'src/users/dto/users';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const userFound = await this.usersService.getUserByEmail(email);

    if (userFound && userFound.password === password) {
      console.log(userFound.password);

      return userFound;
    }
    return null;
  }

  async signin(user: any) {
    const payload = { name: user.name, id: user.id };

    user.password = '';

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }

  async signup(user: UserDTO): Promise<User> {
    return this.usersService.createUser(user);
  }
}
