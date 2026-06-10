import ButtonDoc from './ButtonDoc'
import InputDoc from './InputDoc'
import BadgeDoc from './BadgeDoc'

export const docs = {
  button: ButtonDoc,
  input:  InputDoc,
  badge:  BadgeDoc,
}

export const allComponents = [
  { slug: 'button', name: 'Button',  status: 'ready' },
  { slug: 'input',  name: 'Input',   status: 'ready' },
  { slug: 'badge',  name: 'Badge',   status: 'ready' },
  { slug: 'card',   name: 'Card',    status: 'coming-soon' },
  { slug: 'modal',  name: 'Modal',   status: 'coming-soon' },
  { slug: 'tooltip',name: 'Tooltip', status: 'coming-soon' },
]
