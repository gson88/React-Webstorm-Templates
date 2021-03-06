import ${DATA_CLASS_NAME} from '${DATA_FOLDER}/${DATA_CLASS_NAME}'

function getInitialState() {
  return new ${DATA_CLASS_NAME}();
}

const defaultState = getInitialState();

/** @param state {${DATA_CLASS_NAME}} */
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
