import { PATHS } from "constants/constants";
import { Home, Me, Login, SignUp, Tours, Users, Tour, User } from "pages";
import React from "react";

export const routes = [
  {
    path: PATHS.home,
    component: Home,
    auth: false,
  },
  {
    path: PATHS.me,
    component: Me,
    auth: true,
  },
  {
    path: PATHS.login,
    component: Login,
    layout: React.Fragment,
    auth: false,
  },
  {
    path: PATHS.register,
    component: SignUp,
    layout: React.Fragment,
    auth: false,
  },
  {
    path: PATHS.tours,
    component: Tours,
    auth: true,
  },
  {
    path: PATHS.tour,
    component: Tour,
    auth: true,
  },
  {
    path: PATHS.users,
    component: Users,
    auth: true,
  },
  {
    path: PATHS.user,
    component: User,
    auth: true,
  },
];
