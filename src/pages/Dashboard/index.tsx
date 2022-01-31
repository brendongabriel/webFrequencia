import React, {useState, useEffect} from "react";
import { Barra, Container, Label, Table, Linha, Nome, Data, Caixa, SeguraBotao } from "./styles";
import {api} from "../../services/api";
import { parseJsonText } from "typescript";

interface Alunos {
  n_Matricula: number;
  nome: string;
  telefone: number;
  idade:number;
}

interface Presenca {
  dia: number;
  frequencia: boolean;
  aluno: string
}

const Dashboard: React.FC = () => {

  const [alunos, setAlunos ] = useState<Alunos[]>([]);
  const [presenca, setPresenca] = useState<Presenca[]>([]);
  
  // async function concluirChamada(): Promise<void>{
  //   alert("chegou")
  //   alunos.forEach((aluno,index) => {
  //     var presenca = document.getElementById(`linha${index}`)
  //     var newAluno = {
  //       dia: new Date(),
  //       frequencia: ,
  //       aluno: ""
  //     }
  //     setPresenca()
  //   });

  // }
  
  const handleAlunos = async () => {
    try{
    await api.get<Alunos[]>("aluno/listar")
    .then((response => {
      setAlunos(response.data);
    })).catch(() => console.log("Deu pau"));
    } catch(e) {
    console.log(e)
    }
  }

  useEffect(() =>{
    handleAlunos();
  });

  var data = new Date();
  return (
    <>
    <Barra>
      <p>Controle de Frequência</p>
    </Barra>
    <Container>
        <Label>
          <p>Chamada</p>
        </Label>
        <Table>
          {alunos && alunos.length > 0 ? alunos.map((aluno, index) => (
            <Linha>
              <Nome><p>{aluno.nome}</p></Nome>
              <Data> <p>{data.getFullYear()+ "-" + data.getMonth() + "-" + data.getDate() }</p></Data>
              <Caixa> 
                <input id={`linha${index}`}  type="checkbox"/>
              </Caixa>
            </Linha>
          ))
          : ""
          }
        </Table>
        <SeguraBotao>
          <a href="">cancela</a>

          <a>finalizar</a>
        </SeguraBotao>
    </Container>
     
    </>
  );
};

export default Dashboard;
