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

export const Segura = styled.div `
    width: 80%;
    height: 520px;
    background-color: #005eff;
    margin:auto;
    margin-top:10px;
`;

export const Nome = styled.div`
  width: 90%;
  height: 70px;
  margin-left: 5%;
  background-color: #d3d3d3;
  margin-top:5%;

  p{
    font-size:25px;
    float: left;
    margin-left: 1%;
    margin-top:15px;
  }

  input{
    margin-top:10px;
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
  
  margin-top:20px;
`;

export const SeguraIdade = styled.div`
  width: 50%;
  height: 70px;
  margin-top:50px;
  background-color: #d3d3d3;
  float:  left;

  p{
    font-size:25px;
    float: left;
    margin-left: 1%;
    margin-top:18px;
  }

  input{
    margin-top:13px;
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
  margin-top:15%;

  a{
    width: 150px;
    height: 100px;
    float:left; 
    margin-left: 1%;
    margin-top:20px;
    border-radius: 10%;
    background-color:  #d3d3d3;
    text-decoration:none;
    color:black;

    p{
      font-size:25px;
      float: left;
      margin-top:30px;
      margin-left:20px;
    }
  }

  a:last-child{
  float: right;
  margin-right: 1%;
  background-color: #98FB98;

  p{
      font-size:25px;
      float: left;
      margin-left:30px;
    }
  
}
`;


