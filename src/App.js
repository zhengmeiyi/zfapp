import React from 'react';
import {} from 'antd-mobile'
import {BrowserRouter,Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Citylist from './pages/Citylist'
function App() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path="/" render={(props)=>{ // 重定向
            return <Redirect to="/home/index"></Redirect>
          }}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/citylist" component={Citylist}></Route>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
