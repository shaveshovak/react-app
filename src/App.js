import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cards from './components/card/Cards';
import Button from './components/button/Button';
import { useEffect, useState } from 'react';

const App = ({ name }) => {

  const [btnState, setBtnState] = useState(0)

  const btnClick = () => {
    console.log(btnState)
    setBtnState(btnState + 1);
    console.log(btnState)
  }

  // const message = `Hello, ${name}!`;
  // document.title = `Greetings to ${name}`;
  
  return (
    <div className="App">
     {/* <Header />  */}
     <Cards />
     {/* <Footer />
     <Button title='Get Started' btnStyle='get-started' handleClick={btnClick} />
     <Button title='Get Started 2' btnStyle='get-started-2' />

     <p>{btnState}</p> */}


    </div>
  );
}

export default App;
