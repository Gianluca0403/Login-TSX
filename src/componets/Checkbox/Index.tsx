import styled from "styled-components";

export const RememberButton = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #ec2929;
  align-content: flex-end;
`;

export const Chekbox = styled.label`
  display: flex;
  align-items: left;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;
  width: 340px;
  justify-content: flex-start; // alinha o cheack box e o texto a esquerda
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap; // impede que a linha quebre
`;

export const Pforgot = styled.p`

  color: #850000;
  padding-left: 116px;

`;