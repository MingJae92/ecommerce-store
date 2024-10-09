import { describe, it, beforeEach } from "vitest"; // or from '@testing-library/react'
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
describe("<Navbar/>", () => {
  it("It should..", () => {
    beforeEach(() => {
      render(<Navbar />);
    });
    
  });
});
