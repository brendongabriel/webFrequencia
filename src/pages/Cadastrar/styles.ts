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

export const Segura = styled.div `
    width: 80%;
    height: 520px;
    background-color: purple;
    margin:auto;
    margin-top:10px;
`;

export const Nome = styled.div`
  width: 90%;
  height: 50px;
  margin-left: 5%;
  background-color: yellow;
  margin-top:5%;

  p{
    font-size:25px;
    float: left;
    margin-left: 1%;
    margin-top:2px;
  }

  input{
    width:70%;
    height:40px;
    float: left;
    margin-left: 4%;
  }
`;

export const SeguraInput = styled.div`
  width: 90%;
  height: 50px;
  margin-left: 5%;
  background-color: yellow;
  margin-top:20px;
`;

export const SeguraIdade = styled.div`
  width: 50%;
  height: 50px;
  background-color: red;
  float:  left;

  p{
    font-size:25px;
    float: left;
    margin-left: 1%;
    margin-top:5px;
  }

  input{
    width:64%;
    height:40px;
    float: left;
    margin-left: 4%;
  }
`;

export const SeguraBotao = styled.div`
  width: 90%;
  height: 200px;
  margin-left: 5%;
  background-color: yellow;
  margin-top:5%;

  a{
    width: 150px;
    height: 125px;
    background-color: black;
    float:left; 
    margin-left: 1%;
    margin-top:20px;
    border-radius: 10%;
    background-color: gray;
    text-decoration:none;
    color:black;

    p{
      font-size:25px;
      float: left;
      margin-top:3px;
      margin-left:20px;
    }
  }

  a:last-child{
  float: right;
  margin-right: 1%;
  background-color: green;

  p{
      font-size:25px;
      float: left;
      margin-left:30px;
    }
  
}
`;


