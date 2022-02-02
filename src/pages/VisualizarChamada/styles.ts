import styled from 'styled-components';

export const Barra = styled.div `
  width: 100%;
  height: 70px;
  background-color: #005eff;
  
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
  background-color: #005eff;
  margin: auto;
  margin-top: 30px;
  
`;

export const Label = styled.div `
  width: 90%;
  height: 50px;
  background-color: #dcdcdc;
  margin: auto;
  margin-top: 30px;
  padding-top:5px;
  border-radius:5px;

  p {
      color:black;
      font-size: 40px;
      text-align: center;
  }
`;

export const Table = styled.div `
  width: 90%;
  height: 388px;
  background-color: #f5f5f5;
  margin: auto;
  overflow: auto;
  
`;

export const Nome = styled.div `
  width: 74%;
  height: 40px;
  background-color: #d3d3d3;
  float:left;
  border-radius:25px;
  p{
    font-size:20px;
    margin: 1.5% 0px 0px 4%;
  }

`;

export const Caixa = styled.div `
  width: 13%;
  height: 40px;
  float:right;
  margin-right:15px;
  margin-top:5px;

  p{
    font-size:20px;
    margin: 3% 0px 0px 4%;
  }

`;

export const Linha = styled.div `
  width: 100%;
  height: 40px;
  background-color: #d3d3d3;
  margin: auto;
  margin-top:2px;
  border-radius:15px;

  display: inline-block;

  `;

export const SeguraTabela = styled.div`
width: 70%;
height: 500px;
margin: auto;
margin-top:25px;  
background-color: #005eff;
float:right;
`;
  

export const Frequencia = styled.div`
  width: 8%;
  height: 40px;
  float:left;
  margin-top:5px;

  p{
    font-size:20px;
    margin: 3% 0px 0px 4%;
  }
`;
