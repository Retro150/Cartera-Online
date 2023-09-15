import React, {useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyled from "./GlobalStyled";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";

function App() {
  const [Tema, cambiarTema] = useState(false)
  
  const toggleTema = () => {
    cambiarTema((Tema) => !Tema)
  }


  return (
    <ThemeProvider theme={Tema ? temaClaro : temaOscuro }>
        <GlobalStyled />
        <BtnTema onClick={toggleTema}>
          <SwitchTema tema={Tema}/>
        </BtnTema >
        <Header />
        <Container />
    </ThemeProvider>
  );
}

export default App;
