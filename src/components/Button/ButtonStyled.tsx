import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.primary};
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
