import React from "react";
import { Nome, Data, Caixa, Container } from "./styles";

const Linha: React.FC = () => {
    return(
        <>
        <Container>
            <Nome><p>nome</p></Nome>
            <Data> <p>2022-01-26</p></Data>
            <Caixa> 
              <input  type="checkbox">
              </input>
            </Caixa>
          </Container>
          </>
    )
};
export default Linha;
