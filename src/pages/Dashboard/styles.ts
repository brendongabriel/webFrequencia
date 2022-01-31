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
    text-align: center;
  }

`;

export const Table = styled.div `
  width: 90%;
  height: 320px;
  background-color: green;
  margin: auto;
  
`;

export const Nome = styled.div `
  width: 74%;
  height: 40px;
  background-color: white;
  float:left;
  border-style: solid;
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;

  p{
    font-size:20px;
    margin: 1% 0px 0px 4%;
  }

`;

export const Data = styled.div `
  width: 17%;
  height: 40px;
  background-color: gray;  
  float:left;
  border-style: solid;
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  p{
    font-size:20px;
    margin: 5% 0px 0px 23%;
  }
  
`;

export const Caixa = styled.div `
  width: 8%;
  height: 40px;
  float:left;

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
  display: inline-block;
`;

export const SeguraBotao = styled.div`
  width: 90%;
  height: 70px;
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


