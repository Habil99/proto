import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import { RootState } from "@/store/store";

type UserState = {
  user: User | null;
  isAuth: boolean;
};

const userState: UserState = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setIsAuth: (state: UserState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setUser, setIsAuth } = userSlice.actions;
export const getUser = (state: RootState) => state.user.user;
export const getIsAuth = (state: RootState) => state.user.isAuth;

export default userSlice.reducer;
