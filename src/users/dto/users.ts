class UserDTO {
  name: string;
  email: string;
  password: string;
}

class UserSignInDTO {
  email: string;
  password: string;
}

export { UserDTO, UserSignInDTO };
