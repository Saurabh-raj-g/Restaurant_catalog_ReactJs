//import logo from './logo.svg';
import './App.css';
import 'D:/Bootstrap4/conFusion/node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Navbar, NavbarBrand } from 'C:/Users/vivek/node_modules/reactstrap';
//import Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'C:/Users/vivek/node_modules/react-router-dom';
import { Provider } from 'C:/Users/vivek/node_modules/react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();
class App extends Component { 

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

//function App() { 
  /*class App extends Component{ 
    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES
      };
    }
  
  render(){  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
      
  );
  }
}*/

export default App;
