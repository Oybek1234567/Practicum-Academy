import AppRouters from "./components/AppRouters"
import AuthRouters from "./components/AuthRouters"
import "./style/Root.scss";

const App = () => {
  const login = true;
  return login ? <AppRouters /> : <AuthRouters />
}

export default App
