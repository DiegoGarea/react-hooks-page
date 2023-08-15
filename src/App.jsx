import UseStateHook from './useStateHook';
import UseReducerHook from './UseReducerHook';
import UseReducerHookBasic from './UseReducerHookBasic';
import UseEffectHook from './UseEffectHook';
import UseContextHook from './UseContext';
import Home from './PropsTest/PropsTest';

function App() {
  return (
    <>
      <div className="super-container">
        <div className="container-usestate">
          <h2>useState</h2>
          <UseStateHook />
        </div>
        <br />
        <div className="container-reducer">
          <div>
            <h2>useReducer</h2>
            <UseReducerHook />
          </div>
          <p>-------------dan - 123---------------</p>
          <div>
            <UseReducerHookBasic />
          </div>
        </div>
        <div className="container-useeffect">
          <h2>useEffect</h2>
          <UseEffectHook />
        </div>
        <div className="container-usecontext">
          <h2>useContext</h2>
          <UseContextHook />
        </div>
        <div className="container-propstest">
          <h2>Props test</h2>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
