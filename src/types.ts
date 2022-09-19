import { HTMLAttributes } from "react"

export interface Props extends Omit<HTMLAttributes<SVGElement>, "children"> {
  size?: number
  strokeWidth?: number
  rotateSpeed?: number
}
