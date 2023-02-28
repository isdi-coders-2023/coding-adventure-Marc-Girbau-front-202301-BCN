import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled autoComplete="off" className="form">
      <label htmlFor="email" className="form__label">
        Email
        <input
          className="form__input"
          type="email"
          id="email"
          placeholder="Introduce your email"
        />
      </label>
      <label htmlFor="password" className="form__label">
        Password{" "}
        <input
          className="form__input"
          id="password"
          type="password"
          placeholder="Introduce your password"
        />
      </label>
      <label htmlFor="image" className="form__label">
        Image{" "}
        <input
          className="form__input"
          id="image"
          type="file"
          accept="image/*"
        />
      </label>
      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
