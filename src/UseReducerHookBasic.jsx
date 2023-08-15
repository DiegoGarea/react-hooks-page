import {useReducer} from 'react';

const TestReducerHook = (state, action) => {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
};

const initialState = {name: '', age: 18};

const UseReducerHookBasic = () => {
  const [state, dispatch] = useReducer(TestReducerHook, initialState);

  function handleButtonClick() {
    dispatch({type: 'incremented_age'});
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value,
    });
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
        placeholder="Juan?"
      />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello... {state.name}, you are {state.age}.
      </p>
    </>
  );
};

export default UseReducerHookBasic;
