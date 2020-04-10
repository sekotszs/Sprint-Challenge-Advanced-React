import React from 'react';
import ReactDOM from 'react-dom';
import PlayerForm from "./PlayerForm";
import { render, fireEvent, waitForElement, queryHelpers } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("To see if PlayerForm renders", async () =>{
    const item ={
        name:"Zoe",
        country:'Canada'
    }
    const container = render(<PlayerForm item={item}/>)
    const name = container.getByText('Zoe')
    const country = container.getByText('Canada')
    expect(name).toBeInTheDocument()
    expect(country).toBeInTheDocument('Canada')
})