"use client";

import React, { FC, useEffect } from "react";
import { setIsAuth, setUser, useAppDispatch } from "@/store";

type AuthProviderProps = {
  children: React.ReactNode;
  user: any;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children, user }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.success) {
      dispatch(setUser(user.user));
    } else {
      dispatch(setUser(null));
    }

    dispatch(setIsAuth(user.success));
  }, [dispatch, user]);

  return children;
};
