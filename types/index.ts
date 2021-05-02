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

export interface IBuyer {
  name: string
  email: string
  address: string
  apto: string
  city: string
  country: string
  state: string
  zip_code: number | string
  phone: string | number
}

export type SVGProps = React.SVGAttributes<HTMLOrSVGElement>
