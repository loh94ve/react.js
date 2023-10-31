import { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './common/header/index';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </BrowserRouter> 
        </div>
      </Provider>
    );
  }
}




export default App;
