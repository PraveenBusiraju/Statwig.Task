import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
import MainScreen from './MainScreen';
import PetsHeading from './petsHeading';
import Footer from './Footer';


function App() {
  return (
   
      <>
        <Navbar />
        <MainScreen />
        <Provider store={store}>
          <PetsHeading />
        </Provider>
        <Footer />
        
      </>
     
    
  );
}

export default App;




