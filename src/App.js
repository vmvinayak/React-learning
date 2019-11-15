import React from 'react';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Main from './components/main/body.component'

function App() {
  return (
   <div>
     <Header/>
     <Main/>
     <Footer/>
   </div>
  );
}

export default App;
