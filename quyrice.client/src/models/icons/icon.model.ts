import React from "react"

export interface IconType extends React.SVGProps<SVGSVGElement> {
  id: string
  width?: number
  height?: number
  className: string
}
