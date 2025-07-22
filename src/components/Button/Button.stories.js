import VButton from './Button.vue';

export default {
  title: 'Components/Button',
  component: VButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger']
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset']
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  }
};

const Template = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<VButton v-bind="args">{{ args.label }}</VButton>'
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  variant: 'danger'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true
};