export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginResponse {
  login: {
    token: string;
    user: User;
  };
}

export interface RegisterResponse {
  register: {
    token: string;
    user: User;
  };
}

export interface MeResponse {
  me: User;
}

export interface RefreshTokenResponse {
  refreshToken: {
    token: string;
    user: User;
  };
}

export interface LogoutResponse {
  logout: boolean;
}
