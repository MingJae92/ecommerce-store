import { describe, it, beforeEach } from "vitest"; // or from '@testing-library/react'
import { render } from "@testing-library/react";
import Callus from "./Callus"

describe("<Callus/>",()=>{
    it("Call us component loading", ()=>{
        beforeEach(()=>{
            render(<Callus/>);
        });
    });
}); 