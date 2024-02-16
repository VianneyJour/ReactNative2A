//import HomePage from './Screen/HomeScreen'
import Navigation from './Component/Navigation'
import store from "./redux/Store";
import {Provider} from "react-redux";

export default function App() {
  return (
      <>
        <Provider store={store}>
        <Navigation/>
        </Provider>
      </>
  );
}
