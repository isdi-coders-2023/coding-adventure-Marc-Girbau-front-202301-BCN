import Button from "../Button/Button";

const Form = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="email">
        Email
        <input type="text" id="email" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" type="password" />
      </label>
      <label htmlFor="image">
        Image
        <input id="image" type="file" accept="image/*" />
      </label>
      <Button text="Sign up" />
    </form>
  );
};

export default Form;
