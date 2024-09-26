import './App.css';
import Garagem from './components/Garagem/Garagem';
import Header from './components/Header/Header';
import GlobalStyle from './globalStyle';

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
      <GlobalStyle/>
      <Header/>
      <Garagem 
      apresentaGaragem={apresentaGaragem}
      nome={nome}
      carro1={carro1}
      carro2={carro2}
      />
    </div>
  );

}

export default App;
