import MeuComponente from "./componentes/MeuComponente"


function App() {

  return (
    <div>

      <h1>Olá mundo React</h1>    
      <MeuComponente />
      <MeuBotao conteudo='Me clique'/>
      <MeuBotao conteudo='Depois aqui'/>
      <MeuBotao conteudo='e por fim aqui'/> 
    </div>
    
  )
}

function MeuBotao(props) {
  return(
    <button>{props.conteudo}</button>
  )
}

export default App
