import { createStore } from "../redux-core/createStore.ts";
import reducer from "./reducer";

const initState = {
  count: 0,
};
// 创建store

export const store = createStore(reducer, initState);
