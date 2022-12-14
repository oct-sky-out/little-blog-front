import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryWrapper from '../CategoryWrapper';
import { ChildrenStory, AnchorStory } from './CategoryWrapper.data';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Category/WrapperButton',
  component: CategoryWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CategoryWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoryWrapper> = (args) => (
  <CategoryWrapper {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  anchor: AnchorStory.Default,
  children: ChildrenStory,
};

export const Secondary = Template.bind({});
Secondary.args = {
  anchor: AnchorStory.Default,
  children: ChildrenStory,
};

export const Large = Template.bind({});
Large.args = {
  anchor: AnchorStory.Default,
  children: ChildrenStory,
};

export const Small = Template.bind({});
Small.args = {
  anchor: AnchorStory.Default,
  children: ChildrenStory,
};
