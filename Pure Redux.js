// Codepen:

console.clear();

// Action creators

const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: { name, amount }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: { name }
  }
};

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: { name, amount }
  };
};

// Reducers

const claimsHistory = (oldList = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [ ...oldList, action.payload ];
  }
  
  return oldList;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amount;
  }
  
  if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
}

const policies = (oldList = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [ ...oldList, action.payload.name ];
  }
  
  if (action.type === 'DELETE_POLICY') {
    return oldList.filter(name => name !== action.payload.name);
  }
  
  return oldList;
};

// Store

const { createStore, combineReducers } = Redux;

const departments = combineReducers({
  accounting,
  claimsHistory,
  policies
});

const store = createStore(departments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim',  30));
store.dispatch(createPolicy('Bob',  40));

store.dispatch(createClaim('Alex',  120));
store.dispatch(createClaim('Jim',   50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());