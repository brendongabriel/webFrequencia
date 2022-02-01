import React, {useState, useEffect} from "react";
import {Barra, Segura, Nome, SeguraInput, SeguraIdade, SeguraBotao} from "./styles";
import {api} from "../../services/api";
import { useParams } from "react-router-dom";

interface Aluno {
    idade: number;
    nome: string;
    telefone: number;
}

let aluno = { idade: 0, nome: "", telefone: 0 };
const Editar: React.FC = () => {

    const { id } : { id:string } = useParams();
    const [alunos, setAlunos ] = useState<Aluno>();


    const editar = async () => {
        try {
            if(aluno.nome.length <= 0){
                if(alunos){
                    aluno.nome = alunos.nome;
                }                
            }
            if(aluno.idade <= 0){
                if(alunos){
                    aluno.idade = alunos.idade;
                }                
            }
            if(aluno.telefone <= 0){
                if(alunos){
                    aluno.telefone = alunos.telefone;
                }                
            }
            await api.put(`/aluno/editar/${id}`, aluno);            
        } catch (e) {
            console.log(e);
        }
        
    };
    
    const handleAluno = async () => {
        try{
            await api.get<Aluno>(`aluno/buscar/${id}`)
            .then((response => {
                setAlunos(response.data);
            })).catch(() => console.log("Deu pau"));
        } catch(e) {
            console.log(e)
        }
    }
    
    const pegaNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          aluno.nome = event.target.value;
        } else {
          aluno.nome = alunos ? alunos.nome : "";
        }
      }

      const pegaIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          aluno.idade = parseInt(event.target.value);
        } else {
          aluno.idade = alunos ? alunos.idade : 0;
        }
      }

      const pegaTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) {
          aluno.telefone = parseInt(event.target.value);
        } else {
          aluno.telefone = alunos ? alunos.telefone : 0;
        }
      }


    useEffect(() =>{
        handleAluno();

    },[alunos]);
    
    return (
        <>
        <Barra>
          <p>Cadastro de Aluno</p>
        </Barra>
            <Segura>
                <Nome>
                    <p>NOME COMPLETO:</p>
                    <input id="nome" type="text" defaultValue={alunos?.nome } 
                    onChange={pegaNome}/>
                </Nome>
                <SeguraInput>
                    <SeguraIdade>
                        <p>IDADE:</p>
                        <input id="idade" type="number" defaultValue={alunos?.idade} 
                    onChange={pegaIdade}/>
                    </SeguraIdade>                    
                    <SeguraIdade>
                        <p>TELEFONE:</p>
                        <input id="telefone" type="number" defaultValue={alunos?.telefone } 
                    onChange={pegaTelefone}/>
                    </SeguraIdade>
                </SeguraInput>
                <SeguraBotao>
                    <a href="/"><p>Cancelar</p></a>
                    <a href="/" onClick={() => editar()}><p>Concluir</p></a>
                </SeguraBotao>
            </Segura>

        </>

    );
};
    
export default Editar;
    