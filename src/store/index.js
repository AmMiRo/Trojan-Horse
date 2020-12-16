import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

import {gameReducer as game} from "./game/gameReducer"

const rootReducer = combineReducers(game);

export const store = createStore(rootReducer, applyMiddleware(thunk));