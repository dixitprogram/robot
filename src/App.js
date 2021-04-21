import { Provider } from "react-redux";
import createStore from "./utils/store";
import Command from "./containers/Command";
import Display from "./components/Display";

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Command />
      <Display />
    </Provider>
  );
};
export default App;
