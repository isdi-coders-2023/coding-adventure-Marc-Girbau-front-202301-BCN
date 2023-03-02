import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import RegisterData from "./types";

const Form = (): JSX.Element => {
  const initialRegisterData: RegisterData = {
    email: "",
    password: "",
  };

  let userFormData = new FormData();

  const [registerData, setRegisterData] = useState(initialRegisterData);

  const onChangeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    userFormData.append("image", event.target.files![0]);
  };

  const hasEmptyFields =
    registerData.email === "" || registerData.password === "";

  return (
    <FormStyled autoComplete="off" className="form" onSubmit={() => {}}>
      <label htmlFor="email" className="form__text">
        Email
        <input
          className="form__field"
          type="email"
          id="email"
          placeholder="Introduce your email"
          onChange={onChangeFieldHandler}
          value={registerData.email}
        />
      </label>
      <label htmlFor="password" className="form__text">
        Password
        <input
          className="form__field"
          id="password"
          type="password"
          placeholder="Introduce your password"
          onChange={onChangeFieldHandler}
          value={registerData.password}
        />
      </label>
      <label htmlFor="image" className="form__text">
        Image
        <input
          className="form__field"
          id="image"
          type="file"
          accept="image/*"
          onChange={onChangeImageHandler}
        />
      </label>
      <Button isDisabled={hasEmptyFields} text="Sign up" />
    </FormStyled>
  );
};

export default Form;
