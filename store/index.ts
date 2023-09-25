// store.ts

import { createStore, combineReducers, Store } from 'redux';
import authReducer from '@/reducers/auth';

interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
});

const store: Store<RootState> = createStore(rootReducer);

export default store;
