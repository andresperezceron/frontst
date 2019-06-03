import styled from 'styled-components';

export const Form = styled.form`
  margin:  60px auto;
  padding: 12px 20px;
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right,  #d0d3d4, #ecf0f1);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right,  #d0d3d4, #ecf0f1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`;

export const Input = styled.input`
  border: solid 1px #9c9c9c;;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
  :focus, 
  :hover{border: 1px solid darkorange; outline: none};
  
`;

export const Button = styled.button`
  width: 100%;
  background-color: darkorange;
  color: lightyellow;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :hover {background-color: coral;}
`;

export const A = styled.a`
  text-align: center;
  font-size: 15px;
  color: darkorange;
  display: block;
  margin-top: 12px;
  text-decoration: none;
`;

export const P = styled.p`
  color: saddlebrown;
  text-align: center;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #7b7d7d;

`;