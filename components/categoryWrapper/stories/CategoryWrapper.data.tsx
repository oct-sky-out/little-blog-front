import { Anchor } from '../CategoryWrapper';
import React from 'react';

const AnchorStory: { Default: Anchor } = {
  Default: 'top',
};
const ChildrenStory: React.ReactNode = (
  <>
    <div>category1</div>
    <div>category2</div>
    <div>category3</div>
    <div>category4</div>
    <div>category5</div>
  </>
);

export { AnchorStory, ChildrenStory };
