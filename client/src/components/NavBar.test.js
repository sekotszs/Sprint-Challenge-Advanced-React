import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./NavBar";
import { render, fireEvent, waitForElement, queryHelpers } from "@testing-library/react"

test("does the button for dark mode work?", async () => {
    const container = render(<NavBar />)
    const button = container.getByText(/Dark Mode/i)
    fireEvent.click(button)
    expect(document.body.className).toBe("dark-mode")
})

