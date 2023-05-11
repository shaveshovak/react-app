import logo from './logo.svg';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cards from './components/card/Cards';
import Button from './components/button/Button';

const App = () => {

  const btnClick = () => {
    console.log('I am a button')
  }
  return (
    <div className="App">
     <Header /> 
     <Cards />
     <Footer />
     <Button title='Get Started' btnStyle='get-started' handleClick={btnClick} />
     <Button title='Get Started 2' btnStyle='get-started-2' />
    </div>
  );
}

export default App;
