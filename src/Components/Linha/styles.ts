import styled from 'styled-components';

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

export const Container = styled.div `
  width: 100%;
  height: 40px;
  background-color: white;
  margin: auto;
  display: inline-block;
  
`;
