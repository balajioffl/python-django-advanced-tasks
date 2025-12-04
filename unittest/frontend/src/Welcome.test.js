import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test('renders the welcome message ', () => {
  
    render(<Welcome />);

    const text = screen.getByText("Hello User");

    expect(text).toBeInTheDocument()

});
