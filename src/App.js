import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
      <div className="col-3">
        <Sidebar />
      </div> 
      <div className="col-9 app__main-content">
        {/* navbar */}
        <Navbar/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
