import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuLayout from '../MenuLayout';
import { MenuDataStory } from './MenuLayout.data';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu/index',
  component: MenuLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MenuLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuLayout> = (args) => (
  <MenuLayout {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...MenuDataStory.Default[0],
};
