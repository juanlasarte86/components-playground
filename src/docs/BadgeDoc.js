import Badge from '../components/Badge'

export default {
  name: 'Badge',
  description: 'Small status and label indicators with color variants.',
  component: Badge,
  defaultProps: { variant: 'primary', size: 'md', label: 'New', dot: false },
  controls: [
    { prop: 'variant', type: 'select', options: ['default', 'primary', 'success', 'warning', 'destructive'] },
    { prop: 'size',    type: 'select', options: ['sm', 'md', 'lg'] },
    { prop: 'label',   type: 'text' },
    { prop: 'dot',     type: 'toggle' },
  ],
  codeTemplate: (p) =>
    `<Badge\n  variant="${p.variant}"\n  size="${p.size}"\n  label="${p.label}"${p.dot ? '\n  dot' : ''}\n/>`,
}
