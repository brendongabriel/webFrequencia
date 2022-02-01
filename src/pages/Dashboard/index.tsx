import React, {useState, useEffect, useCallback} from "react";
import { Barra, Container, Label, Table, Linha, Nome, Caixa, SeguraMenu,SeguraTabela,Botao } from "./styles";
import {api} from "../../services/api";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface Alunos {
  n_Matricula: number;
  nome: string;
  telefone: number;
  idade:number;
}

interface Presenca {
  dia: string;
  frequencia: boolean;
  aluno: number,
}
interface PresencaAluno{
  id: number;
}

const Dashboard: React.FC = () => {
 
  const [alunos, setAlunos ] = useState<Alunos[]>([]);
  const [presenca, setPresenca] = useState<Presenca[]>([]);
  const [alunosMarcados, setAlunosMarcados ] = useState<PresencaAluno[]>([]);

  const SalvarChamada = async () => {
    console.log(presenca)
    presenca.splice(0,presenca.length);
    alunos.map(aluno => {
      if(alunosMarcados.find(alunoFind => alunoFind.id === aluno.n_Matricula)){
        presenca.push({dia:(document.getElementById("data") as HTMLInputElement).value,frequencia: true, aluno: aluno.n_Matricula});
        //setPresenca([...presenca, {dia:(document.getElementById("data") as HTMLInputElement).value,frequencia: true, aluno: aluno.n_Matricula}]);
      }else{
        //setPresenca([...presenca, {dia:(document.getElementById("data") as HTMLInputElement).value,frequencia: false, aluno: aluno.n_Matricula}]);
        presenca.push({dia:(document.getElementById("data") as HTMLInputElement).value,frequencia: false, aluno: aluno.n_Matricula});
      }     
    })    
    console.log(presenca)
    
    EnviarChamada();

  }
  

  const EnviarChamada = async () => {
    await api.post("frequencia/cadastrar", presenca);
  }
  
  const marcarBox = useCallback((id: number) => {
    if(alunosMarcados.find(aluno => aluno.id === id)) {
      setAlunosMarcados(alunosMarcados.filter(aluno => aluno.id !== id))
    }else {
      alunosMarcados.push({id:id})
      setAlunosMarcados(alunosMarcados)
    }
  }, [alunosMarcados]);

  const deletar = async (id:number) => {
    try{
    await api.delete<Alunos[]>(`aluno/delete/${id}`)
    .then((response => {
      setAlunos(response.data);
    })).catch(() => console.log("Deu pau"));
    } catch(e) {
    console.log(e)
    }
  }


  
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
  },[alunos]);

  var data = new Date();
  return (
    <>
    <Barra>
      <p>Controle de Frequência</p>
    </Barra>
    <Container>
      <SeguraTabela>
        <Label><p>Chamada</p> <input type="date" id="data"/></Label>
        <Table>
          {alunos.length > 0 ? alunos.map(aluno => (
            <Linha>
              <Nome><p>{aluno.nome}</p></Nome>   
              <FiTrash2 size={30} onClick={() => deletar(aluno.n_Matricula)}></FiTrash2>         
              <a href={`/editarAluno/${aluno.n_Matricula}`}><FiEdit size={30}/></a>
              <Caixa><input type="checkbox" onClick={() => marcarBox(aluno.n_Matricula)}/></Caixa>
          </Linha>
          )): ""}  
        </Table>
      </SeguraTabela>
      <SeguraMenu>
        <a href="/cadastrar"><Botao><p>Cadastrar Aluno</p></Botao></a>
        <a href="/visualizarchamada"><Botao><p>Visualizar Chamada</p></Botao></a>
        <a onClick={() => SalvarChamada()}><Botao><p>Salvar Chamada</p></Botao></a>
      </SeguraMenu>
    </Container>
     
    </>
  );
};

export default Dashboard;
