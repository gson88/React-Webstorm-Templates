//sut	
import reducer from '../reducer';	

const setup = (state = reducer(), ...initialActions) => {	
  let newState = state;	
  if (initialActions.length > 0) {	
    for (const action of initialActions) {	
      newState = reducer(newState, action);	
    }	
  }	
  return newState;	
};	

describe('${RECORD_NAME} - reducer', () => {	

});
