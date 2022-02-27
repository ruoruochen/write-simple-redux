export const createStore = (reducer, preloadedState, enhancer) => {
  /* 属性 */
  let currentState = preloadedState || {};
  let currentReducer = reducer;
  let currentListeners = [];

  /* 方法 */
  function getState() {
    return currentState;
  }

  function dispatch(action) {
    //   更新state
    currentState = currentReducer(currentState, action);

    //   通知观察者 更新UI
    const listeners = currentListeners;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
    return action;
  }

  function subscribe(listener: () => void) {
    let isSubscribed = true;
    currentListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  function replaceReducer(nextReducer) {
    currentReducer = nextReducer;
    // 随便乱写的
    dispatch({ type: "@@Redux.Replace" });
  }

  /* 初始化 */
  dispatch({ type: "@@Redux-Init" });

  /* 暴露方法 */
  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };
};
