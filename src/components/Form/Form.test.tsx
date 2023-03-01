import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text `Sign up`", () => {
      const buttonText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a label with the text `Email`", () => {
      const labelText = "Email";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const emailLabel = screen.getByLabelText(labelText);

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text `Password`", () => {
      const labelText = "Password";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const passwordLabel = screen.getByLabelText(labelText);

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text `Image`", () => {
      const labelText = "Image";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const imageLabel = screen.getByLabelText(labelText);

      expect(imageLabel).toBeInTheDocument();
    });
  });
});
