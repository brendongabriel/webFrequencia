import React from "react";
import {Barra, Segura, Nome, SeguraInput, SeguraIdade, SeguraBotao} from "./styles";
import Logo from "../../assets/senai.png";


const Cadastrar: React.FC = () => {
    return (
        <>
        <Barra>
          <p>Cadastro de Aluno</p>
        </Barra>
        <Segura>
            <Nome>
                <p>NOME COMPLETO:</p>
                <input type="text" />

            </Nome>

            <SeguraInput>
                <SeguraIdade>
                    <p>IDADE:</p>
                    <input type="text" />
                </SeguraIdade>                    
                <SeguraIdade>
                    <p>TELEFONE:</p>
                    <input type="text" />
                </SeguraIdade>

            </SeguraInput>
            <SeguraBotao>
                <button><p>Cancelar</p></button>
                <button><p>Concluir</p></button>
            </SeguraBotao>
        </Segura>
        </>

    );
};
    
export default Cadastrar;
    