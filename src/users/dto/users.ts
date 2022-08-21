import { ApiProperty } from '@nestjs/swagger';

class UserDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

class UserSignInDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export { UserDTO, UserSignInDTO };
