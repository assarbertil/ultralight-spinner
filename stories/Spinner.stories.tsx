import React from "react"
import { Meta, Story } from "@storybook/react"
import { Spinner } from "../src"
import { Props } from "../src/types"

const meta: Meta = {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Props> = args => <Spinner {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
