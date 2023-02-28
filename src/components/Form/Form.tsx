import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled autoComplete="off">
      <label htmlFor="email">
        Email
        <input type="text" id="email" placeholder="Introduce your email" />
      </label>
      <label htmlFor="password">
        Password{" "}
        <input
          id="password"
          type="password"
          placeholder="Introduce your password"
        />
      </label>
      <label htmlFor="image">
        Image <input id="image" type="file" accept="image/*" />
      </label>
      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
