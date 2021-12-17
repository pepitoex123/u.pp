import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserInterface from "./components/UserInterface";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Header/>
              <UserInterface/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
              <Footer/>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
