import styled from 'styled-components';

export const Form = styled.form`
  margin:  60px auto;
  padding: 12px 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: bisque;
`;

export const Input = styled.input`
  background-color: lightyellow;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
  :focus {border: 2px solid darkorange;}
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
  color: darkorange;
`;