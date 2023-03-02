import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When the user writes `maxi@gmail.arg` on the email input", () => {
    test("Then the value of the input should be `maxi@gmail.arg`", async () => {
      const labelText = "Email";
      const expectedInputValue = "maxi@gmail.arg";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(labelText);

      await userEvent.type(emailInput, expectedInputValue);

      expect(emailInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user writes `asdafasda1234` on the password input", () => {
    test("Then the value of the input should be `asdafasda1234`", async () => {
      const labelText = "Password";
      const expectedInputValue = "asdafasda1234";

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const passwordInput = screen.getByLabelText(labelText);

      await userEvent.type(passwordInput, expectedInputValue);

      expect(passwordInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user uploads the image `ronnie.jpg` to the image input", () => {
    test("Then the image input should have this image appended", () => {
      const labelText = "Image";
      const fileToAppend = new File(["image"], "ronnie.jpg", {
        type: "image/jpg",
      });

      render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const imageInput: HTMLInputElement = screen.getByLabelText(labelText);

      userEvent.upload(imageInput, fileToAppend);

      expect(imageInput.files![0]).toEqual(fileToAppend);
    });
  });
});
