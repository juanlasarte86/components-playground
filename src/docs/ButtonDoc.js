import Button from '../components/Button'

export default {
  name: 'Button',
  description: 'Clickable actions with multiple variants, sizes, and states.',
  component: Button,
  defaultProps: { label: 'Click me', variant: 'primary', size: 'medium', disabled: false },
  controls: [
    { prop: 'label',    type: 'text' },
    { prop: 'variant',  type: 'select', options: ['primary', 'secondary', 'ghost'] },
    { prop: 'size',     type: 'select', options: ['small', 'medium', 'large'] },
    { prop: 'disabled', type: 'toggle' },
  ],
  codeTemplate: (p) =>
    `<Button\n  label="${p.label}"\n  variant="${p.variant}"\n  size="${p.size}"${p.disabled ? '\n  disabled' : ''}\n/>`,
}
