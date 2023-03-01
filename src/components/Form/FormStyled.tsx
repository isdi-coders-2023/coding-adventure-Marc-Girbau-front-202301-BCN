import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form {
    &__text {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__field {
      padding: 11px;
      border-radius: 8px;
      background-color: #e8e8e8;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};

      &::placeholder {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (min-width: 987px) {
    .form {
      &__field {
        padding: 20px 11px;
      }
    }
  }
`;

export default FormStyled;
