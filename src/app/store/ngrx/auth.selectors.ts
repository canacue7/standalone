import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectCurrentUser = createSelector(selectAuthFeature, (s) => s?.user ?? null);
export const selectAuthError = createSelector(selectAuthFeature, (s) => s?.error ?? null);
