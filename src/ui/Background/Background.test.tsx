import { render } from "@testing-library/react";
import { Container } from "react-dom";
import Background from "./Background";

describe('<Background />', () => {
    let container: Container;

    beforeEach(() => {
        container = render(<Background />).container;
    });

    it('Should display top face', () => {
        expect(container.querySelector('#top-face')).toBeInTheDocument();
    });

    it('Should display left bottom face', () => {
        expect(container.querySelector('#left-bottom-face')).toBeInTheDocument();
    });

    it('Should display right bottom face', () => {
        expect(container.querySelector('#right-bottom-face')).toBeInTheDocument();
    });
});