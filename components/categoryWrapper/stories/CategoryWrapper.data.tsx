import { Anchor } from '../CategoryWrapper';
import React from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const AnchorStory: { Default: Anchor } = {
  Default: 'top',
};

const ChildrenStory: React.ReactNode = (
  <>
    <ListItem disablePadding>
      <ListItemButton href="#">
        <ListItemText primary="category1" />
        <ExpandLess />
      </ListItemButton>
    </ListItem>
    <Collapse in={true} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ px: 1 }}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="subCategory" />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItem disablePadding>
      <ListItemButton href="#">
        <ListItemText primary="category3" />
        <ExpandMore />
      </ListItemButton>
    </ListItem>
    <Collapse in={false} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ px: 1 }}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItem disablePadding>
      <ListItemButton href="#">
        <ListItemText primary="category4" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton href="#">
        <ListItemText primary="category5" />
      </ListItemButton>
    </ListItem>
  </>
);

export { AnchorStory, ChildrenStory };
