import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const StyledProfileList = styled(List)`
  padding-top:20px;
  padding-bottom:2
`;

const StyledAvatar = styled(Avatar)`
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 75px;
  width: 75px;
`;

const NameText = styled.text`
  padding-left: 10px;
  font-weight: 800;
  font-size: large;
`;

const PositionText = styled.text`
padding-left: 10px;
font-weight: 500;
font-size: large;
`;

const OrganisationText = styled.text`
  padding-left: 10px;
  font-weight: 400;
  font-size: smaller;
`;

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <StyledProfileList>
        <StyledAvatar>CB</StyledAvatar><br/>
        <NameText>Marcus Phua Jit Wei</NameText><br/>
        <PositionText>Teacher</PositionText><br/>
        <OrganisationText>Tembusu Secondary School</OrganisationText><br/>
      </StyledProfileList>

      <Divider />

      <List>
        <ListItem button key={"hello"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Hello "} />
        </ListItem>
        <ListItem button key={"Action2"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Action2 "} />
        </ListItem>
        <ListItem button key={"hello"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Action 3"} />
        </ListItem>
        <ListItem button key={"hello"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"Log Out"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <StyledAvatar onClick={toggleDrawer('left', true)} >CB</StyledAvatar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}