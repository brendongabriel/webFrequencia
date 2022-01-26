import React from "react";
import { Segura, Img, Botao} from "./styles";
import Logo from "../../assets/senai.png";


const Menu: React.FC = () => {

  return (
    <>
        <Img src={Logo} alt="Logo Escola S" />


        <Segura>
            <Botao> 
                <p>
                    Gerenciar Alunos

                </p>
            </Botao>
            <Botao>
                 <p>
                 Fazer Chamada
                </p>
            </Botao>
            <Botao>
                <p>
                Gerenciar Frequencias
                </p>
            </Botao>
        </Segura>
    </>
  );
};

export default Menu;
