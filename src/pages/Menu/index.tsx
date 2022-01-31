import React from "react";
import { Segura, Img, Botao} from "./styles";
import Logo from "../../assets/senai.png";


const Menu: React.FC = () => {

  return (
    <>
        <Img src={Logo} alt="Logo Escola S" />


        <Segura>
            <Botao href="/cadastrar"> 
                <p>
                    Gerenciar Alunos
                </p>
            </Botao>
            <Botao href="/dashboard">
                 <p>
                    Fazer Chamada
                </p>
            </Botao>
            <Botao href="/escolherdata">
                <p>
                    Gerenciar Frequencias
                </p>
            </Botao>
        </Segura>
    </>
  );
};

export default Menu;
