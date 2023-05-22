import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




function App() {
  return (
    <BrowserRouter>
        <Navbar />

        
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
      </main>



      <footer>
        <Footer />
      </footer>

    </BrowserRouter>
  );
}

export default App;
