import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
  user: any | null;
  error: any | null;
}

export const initialAuthState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, user: null }))
);
