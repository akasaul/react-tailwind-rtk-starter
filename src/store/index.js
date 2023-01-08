import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const store = configureStore({
	reducer: {
		auth: authReducer
	}
});

injectStore(store);

export default store;
