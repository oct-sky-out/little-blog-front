import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@mui/material';
import { useState } from 'react';

export type Anchor = 'left' | 'top' | 'right' | 'bottom';
export interface PropsType {
  children: React.ReactNode;
  anchor: Anchor;
}

const CategoryWrapper: React.FC<PropsType> = ({
  anchor,
  children,
}: PropsType) => {
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [categoryToggleState, setCategoryToggleState] = useState(false);

  const isIgnoreEvent = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return true;
    }
    return false;
  };

  const toggleCategory =
    (updateForstate: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (isIgnoreEvent(event)) {
        return;
      }
      setCategoryToggleState(updateForstate);
    };

  return (
    <React.Fragment key={anchor}>
      <Button
        onClick={toggleCategory(!categoryToggleState)}
        data-testid="menu-open-btn"
      >
        <MenuIcon fontSize="large" className="text-fuchsia-700" />
      </Button>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor={anchor}
        open={categoryToggleState}
        onClose={toggleCategory(false)}
        onOpen={toggleCategory(true)}
        data-testid="opened-categories-wrapper"
      >
        {children}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default CategoryWrapper;
