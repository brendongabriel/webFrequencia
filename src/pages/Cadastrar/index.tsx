import React from "react";
import {Barra, Segura, Nome, SeguraInput, SeguraIdade, SeguraBotao} from "./styles";
import {api} from "../../services/api";

const Cadastrar: React.FC = () => {

    const aluno = {
        idade: 0,
        nome: "",
        telefone: 0
    }
    async function cadastrar(): Promise<void> {
        aluno.idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
        aluno.nome = (document.getElementById("nome") as HTMLInputElement).value;
        aluno.telefone = parseInt((document.getElementById("telefone") as HTMLInputElement).value);

        console.log(aluno)
        await api.post("/aluno/cadastrar", aluno);
        
      } 
    return (
        <>
        <Barra>
          <p>Cadastro de Aluno</p>
        </Barra>
            <Segura>
                <Nome>
                    <p>NOME COMPLETO:</p>
                    <input id="nome" type="text" />
                </Nome>
                <SeguraInput>
                    <SeguraIdade>
                        <p>IDADE:</p>
                        <input id="idade" type="number" />
                    </SeguraIdade>                    
                    <SeguraIdade>
                        <p>TELEFONE:</p>
                        <input id="telefone" type="number" />
                    </SeguraIdade>
                </SeguraInput>
                <SeguraBotao>
                    <a href="/"><p>Cancelar</p></a>
                    <a onClick={() => cadastrar()} href="/"><p>Concluir</p></a>
                </SeguraBotao>
            </Segura>

        </>

    );
};
    
export default Cadastrar;
    