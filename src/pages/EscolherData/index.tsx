import React from "react";
import { Barra, Container, Label, Table } from "./styles";
import Linha from "../../Components/Linha";

const EscolherData: React.FC = () => {

  return (
    <>
    <Barra>
      <p>Controle de Frequência</p>
    </Barra>
    <Container>
        <Label>
          <p>Chamada</p>
          <input type="date" />
        </Label>
        <Table>
          <Linha>
          </Linha>
        </Table>
    </Container>
    </>
  );
};

export default EscolherData;
