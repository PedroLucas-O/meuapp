import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Garagem from './components/Garagem';

function App() {
  let nome = 'maria'
  let carro1 = {
    nome: 'classic',
    cor: 'cinza',
    ano: 2014,
    flex: true
  }
  let carro2 = {
    nome: 'fusca',
    cor: 'azul chechelento',
    ano: 1402,
    flex: true
  }

const apresentaGaragem = (nome) => {
  alert (`Boas-Vindas à garagem de ${nome}`) 
}

  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Footer/> */}
      <Garagem 
      carro1={carro1}
      carro2={carro2}
      />
    </div>
  );

}

export default App;
