import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with the text `Sign up`", () => {
    test("Then it should show a button with the text `Sign up`", () => {
      const innerButtonText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Button isDisabled={false} text={innerButtonText} />
        </ThemeProvider>
      );

      const signUpButton = screen.getByRole("button", {
        name: innerButtonText,
      });

      expect(signUpButton).toBeInTheDocument();
    });
  });
});
