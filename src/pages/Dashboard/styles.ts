import styled from 'styled-components';

export const Barra = styled.div `
  width: 100%;
  height: 70px;
  background-color: rgba(105, 105, 105, 0.3);
  
  p {
      color:black;
      font-size: 40px;
      text-align: center;
      margin-top:10px;
  }
`;
export const Container = styled.div `
  width: 90%;
  height: 500px;
  background-color: red;
  margin: auto;
  margin-top: 30px;
  
`;

export const SeguraMenu = styled.div`
  width: 30%;
  height: 500px;
  background-color: pink;
  float:left;
`;
export const Label = styled.div `
  width: 90%;
  height: 50px;
  background-color: blue;
  margin: auto;
  margin-top: 30px;
  padding-top:5px;

  p {
    color:black;
    font-size: 40px;
    float:left;
    margin-left:17px;
  }

  #data {
        height: 30px;
        width: 170px;
        margin: 2px 17px 0px 0px;
        border-radius: 3px;
        border: none;
        padding: 5px;
        color:#2F4F4F;
        font-size: 20px; 
        float:right;
    }

`;

export const Table = styled.div `
  width: 90%;
  height: 388px;
  background-color: green;
  margin: auto;
  
`;

export const Nome = styled.div `
  width: 74%;
  height: 40px;
  background-color: white;
  float:left;
  p{
    font-size:20px;
    margin: 1% 0px 0px 4%;
  }

`;

export const Caixa = styled.div `
  width: 8%;
  height: 40px;
  float:right;
  margin-right:15px;

  input[type=checkbox] {
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin: 7px 0px 0px 35px;
}


`;

export const Linha = styled.div `
  width: 100%;
  height: 40px;
  background-color: white;
  margin: auto;
  margin-top:2px;
  border-radius:3px;
  
  display: inline-block;

  svg{
    margin-top:3px;
    margin-left:32px;
    color: black;
  }
  `;

export const SeguraTabela = styled.div`
width: 70%;
height: 500px;
margin: auto;
background-color: lightblue;
float:right;
`;
  
export const SeguraBotao = styled.div`
  width: 90%;
  height: 100px;
  margin: auto;
  background-color: blue;

  a {
    width:15%;
    height: 70px;
    float: left;
    background-color:yellow;
    text-decoration:none;
    color: black;
  }
  a:last-child{
    float: right;

  }
`;


export const TableALuno = styled.div`
  width:25%;
  height:388px;
  background-color: green;
  float:left;
`;
 export const Botao = styled.button`
  width:40%;
  height:80px;
  background-color:lightgreen;
  margin: 17% 0px 0px 100px;
  border-radius:10px;
  border:none;


  p{
   font-size:25px;
   text-align:center;
   margin-top:-2px;
  }
 `;


