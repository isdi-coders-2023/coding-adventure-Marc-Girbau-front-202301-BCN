import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__input:not([type="file"]) {
      padding: 11px;
      border-radius: 8px;
    }
  }

  @media (min-width: 987px) {
    .form {
      &__input:not([type="file"]) {
        padding: 20px 11px;
      }
    }
  }
`;

export default FormStyled;
