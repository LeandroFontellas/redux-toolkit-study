import createSagaMiddleware from 'redux-saga';
import { MiddlewareArray, configureStore } from '@reduxjs/toolkit';
import { combinedReducers } from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    ...combinedReducers,
  },
  middleware: new MiddlewareArray().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

// exportando tipagem do estado global para utilizacao em alguns lugares
export type RootState = ReturnType<typeof store.getState>;

// exportando a tipagem do dispatch para utilizacao em alguns lugares
export type AppDispatch = typeof store.dispatch;

export { store };
