/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas

import todoSagas from './Todo';
import feedbacksSagas from './Feedbacks';

export default function* rootSaga(getState) {
    yield all([
        todoSagas(),
        feedbacksSagas()
    ]);
}