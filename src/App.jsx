import React from 'react'
import Produto from './produto'




function App() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);


    async function handleClick(event) {
      setCarregando(true);
      const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );
      const json = await response.json();
      setDados(json);
      setCarregando(false);
}
   return(
<>
  <button style={ {margin: ".5rem"} } onClick={handleClick}>smartphone</button>
  <button style={ {margin: ".5rem"} } onClick={handleClick}>tablet</button>
  <button style={ {margin: ".5rem"} } onClick={handleClick}>notebook</button>

  {carregando && <p>carregando...</p>}
  {!carregando && dados && <Produto dados={dados} />  }
</>

   )

}

export default App
