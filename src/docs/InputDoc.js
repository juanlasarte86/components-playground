import Input from '../components/Input'

export default {
  name: 'Input',
  description: 'Text fields with labels, placeholder, validation states, and hints.',
  component: Input,
  defaultProps: { label: 'Email', placeholder: 'you@example.com', size: 'md', state: 'default', disabled: false, hint: '' },
  controls: [
    { prop: 'label',       type: 'text' },
    { prop: 'placeholder', type: 'text' },
    { prop: 'size',        type: 'select', options: ['sm', 'md', 'lg'] },
    { prop: 'state',       type: 'select', options: ['default', 'error', 'success'] },
    { prop: 'hint',        type: 'text',   label: 'Hint text' },
    { prop: 'disabled',    type: 'toggle' },
  ],
  codeTemplate: (p) =>
    `<Input\n  label="${p.label}"\n  placeholder="${p.placeholder}"\n  size="${p.size}"\n  state="${p.state}"${p.hint ? `\n  hint="${p.hint}"` : ''}${p.disabled ? '\n  disabled' : ''}\n/>`,
}
