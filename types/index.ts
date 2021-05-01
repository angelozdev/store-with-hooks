import * as React from 'react'

export interface WithChildren {
  children: React.ReactNode
}

export interface IProduct {
  id: string
  image: string
  title: string
  price: number
  description: string
}

export type SVGProps = React.SVGAttributes<HTMLOrSVGElement>
