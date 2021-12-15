import Layout from "./components/Layout";
import Header from "./components/Header";
import UserInterface from "./components/UserInterface";
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Header/>
      <UserInterface/>
      <BrowserRouter>
          <Route exact path={"/"}>
              
          </Route>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
