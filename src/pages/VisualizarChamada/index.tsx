import React, {useState, useEffect} from "react";
import { Barra, Label, Table, Linha, Nome, Caixa, SeguraTabela, Frequencia} from "./styles";
import {api} from "../../services/api";

interface Presenca {
  dia: string;
  frequencia: boolean;
  aluno: number,
}

const VisualizarChamada: React.FC = () => {
 
  const [presenca, setPresenca] = useState<Presenca[]>([]);

  
  const handleAlunos = async () => {
    try{
    await api.get<Presenca[]>("frequencia/listar")
    .then((response => {
      setPresenca(response.data);
    })).catch(() => console.log("Deu pau"));
    } catch(e) {
    console.log(e)
    }
  }

  useEffect(() =>{
    handleAlunos();
  },[presenca]);

  var data = new Date();
  return (
    <>
    <Barra>
      <p>Controle de Frequência</p>
    </Barra>
      <SeguraTabela>
        <Label><p>Chamada</p></Label>
        <Table>
          {presenca.length > 0 ? presenca.map(presenca => (
            <Linha>
              <Nome><p>{presenca.aluno}</p></Nome>   
              <Frequencia><p>{presenca.frequencia ? "F": "P"}</p></Frequencia>
              <Caixa><p>{presenca.dia.slice(0,10)} </p></Caixa>
          </Linha>
          )): ""}  
        </Table>
      </SeguraTabela>     
    </>
  );
};

export default VisualizarChamada;
