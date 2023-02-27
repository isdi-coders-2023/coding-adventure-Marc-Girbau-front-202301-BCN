import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background-color: #cccf18;
  font-family: "Saira Stencil One";
  font-size: 1.25rem;
  color: #1e1e1e;
  padding: 5px 123px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 987px) {
    padding: 14px;
    width: 320px;
  }
`;

export default ButtonStyled;
