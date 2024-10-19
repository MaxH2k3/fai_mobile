import { hooks } from ".";
import { ILoggedInUserData } from "../constants/model/user-interface";

export const useLoggedInUser = (): ILoggedInUserData => {

  const user = hooks.useSelector((state) => state.appState.user);

  return {
    firstName: user!.firstName,
    lastName: user!.lastName,
    avatar: user!.avatar,
    email: user!.email,
    gender: user!.gender,
    roleName: user!.roleName,
    token: user!.token
  }
};
