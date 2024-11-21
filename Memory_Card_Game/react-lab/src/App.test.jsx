// App.test.jsx

import { describe, it, expect } from "vitest";
import React,{useState} from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    const {component} = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it("renders haha you clicked after button click",async ()=>{
    const user = userEvent.setup();

    render(<App/>);
    const button = screen.getByRole("button",{name: "Click Me"});
    
    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/haha you clicked/i);
    
  });
});

