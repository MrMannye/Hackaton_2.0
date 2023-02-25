import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  // allow_spend: boolean | string,
  createdAt: string,
  email: string,
  email_verified: boolean,
  eth_address: string | null,
  // has_security: boolean,
  id: number
  // is_subaccount: boolean,
  // main_user_id: number | null,
  sol_address: string | null,
  // sui_address: string | null,
  updatedAt: string,
  username: string,
  wallet?: {
    eth_address: string,
    sol_address: string,
  }
}

const initialState: userState = {
  // allow_spend: false,
  createdAt: "",
  email: "",
  email_verified: false,
  eth_address: "",
  // has_security: false,
  id: 0,
  // is_subaccount: false,
  // main_user_id: 0,
  sol_address: "",
  // sui_address: "",
  updatedAt: "",
  username: "",
  wallet: {
    eth_address: "",
    sol_address: "",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<userState>) => {
      state.createdAt = action.payload.createdAt
      state.email = action.payload.email
      state.email_verified = action.payload.email_verified
      state.eth_address = action.payload.eth_address
      state.id = action.payload.id
      state.sol_address = action.payload.sol_address
      state.updatedAt = action.payload.updatedAt
      state.username = action.payload.username
      state.wallet = action.payload.wallet
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser } = userSlice.actions

export default userSlice.reducer