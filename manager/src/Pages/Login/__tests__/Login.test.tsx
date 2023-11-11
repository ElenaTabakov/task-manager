import { render , screen } from "@testing-library/react";

import Login from "../Login";
import LoginForm from "../components/LoginForm";

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        interceptors: {
          request: { eject: jest.fn(), use: jest.fn() },
          response: { eject: jest.fn(), use: jest.fn() },
        },
      };
    },
  };
});


describe('Login component', () => {
    it('Login renders' , () => {
        render(<Login />);

        expect( screen.getByText('Log in')).toBeInTheDocument();
    });
});