import { render, screen } from "@testing-library/react";
import { Container } from "react-dom";
import Home from "./Home";

describe("<Home />", () => {
  let container: Container;
  beforeEach(() => {
    container = render(<Home />).container;
  });

  it("Should display counter", () => {
    expect(screen.getByTestId('counter-display-component')).toBeTruthy();
  });

  it("Should display about", () => {
    expect(screen.getByTestId('about-component')).toBeTruthy();
  });
});
