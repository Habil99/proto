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
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }

    dispatch(setIsAuth(!!user));
  }, [dispatch, user]);

  return children;
};
