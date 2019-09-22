import React from 'react';
import MainLayout from './layout/index'
// import Button from 'antd/es/button';
// import logo from './assets/svg/logo.svg';
import './style/App.css';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Button type="primary">Button</Button>
    //   </header>
    // </div>
    <div className="app-wrapper">
      <MainLayout/>
    </div>
  );
}

export default App;
