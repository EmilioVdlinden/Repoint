import React from 'react';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';




function App() {
  return (
    <div className="App flex">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
