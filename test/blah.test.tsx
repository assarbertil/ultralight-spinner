import React from "react"
import * as ReactDOM from "react-dom"
import { Default as Spinner } from "../stories/Spinner.stories"

describe("Thing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")

    ReactDOM.render(<Spinner />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
