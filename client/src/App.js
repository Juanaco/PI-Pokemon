import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Landing, Home, Detail, Form} from "./views";
import {Route, useLocation} from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>

      {location.pathname !== "/" && <NavBar/>} {/*esto saca la navBar del landing o donde se quiera evitar}


      {/*dos formas de hacer el pathing a cada endpoing*/}
      {/* 1 
       en esta opción no se pueden mandar "props"*/}
      <Route exact path="/" component= {Landing}/>
      {/* 2 
        en esta opción sí se puede */}
      <Route path ="/home" render={() => <Home />}/>
      {/* 3 */}
      <Route path="/detail">
        <Detail/>
      </Route>
      <Route path="/create" component ={Form}/>
    </div>
  );
}

export default App;
