import { describe, it, beforeEach } from "vitest"; // or from '@testing-library/react'
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("<Navbar/>", () => {
  it("Navbar is loading", () => {
    beforeEach(() => {
      render(<Navbar />);
    });
    
  });
});
