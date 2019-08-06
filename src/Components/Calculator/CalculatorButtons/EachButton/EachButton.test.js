import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import EachButton from "./index";
describe("Test for EachButton Component", () => {
  it("should test if function is called ", () => {
    const mockFunction = jest.fn();

    const { getByText } = render(<EachButton funtion={mockFunction} />);
    const add = getByText("+");
    fireEvent.click(add);
    expect(mockFunction).toHaveBeenCalledWith("+");
  });
});
