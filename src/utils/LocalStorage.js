// src/utils/localStorage.js

const CART_STATE_KEY = 'cartState';
const TIMESTAMP_KEY = 'cartTimestamp';
const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24시간

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem(CART_STATE_KEY);
      const timestamp = localStorage.getItem(TIMESTAMP_KEY);
      if (serializedState === null || timestamp === null) {
        return undefined;
      }

      const currentTime = new Date().getTime();
      if (currentTime - parseInt(timestamp, 10) > EXPIRATION_TIME){
        // 상태가 만료되었다면?
        localStorage.removeItem(CART_STATE_KEY);
        localStorage.removeItem(TIMESTAMP_KEY);
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      const timestamp = new Date().getTime().toString();
      localStorage.setItem(CART_STATE_KEY, serializedState);
      localStorage.setItem(TIMESTAMP_KEY, timestamp);
    } catch (err) {
      // Ignore write errors.
    }
  };

  export const clearState = () => {
    try {
        localStorage.removeItem(CART_STATE_KEY);
        localStorage.removeItem(TIMESTAMP_KEY);
    } catch (err) {
        
    }
  }
  