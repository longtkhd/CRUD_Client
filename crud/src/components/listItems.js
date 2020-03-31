import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink as RouterLink } from 'react-router-dom';
// import  Link  from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
// const useStyles = makeStyles(theme => ({
//   root: {},
//   item: {
//     display: 'flex',
//     paddingTop: 0,
//     paddingBottom: 0
//   },
//   // button: {
//   //   color: colors.blueGrey[800],
//   //   padding: '10px 8px',
//   //   justifyContent: 'flex-start',
//   //   textTransform: 'none',
//   //   letterSpacing: 0,
//   //   width: '100%',
//   //   fontWeight: theme.typography.fontWeightMedium
//   // },
//   icon: {
//     color: theme.palette.icon,
//     width: 24,
//     height: 24,
//     display: 'flex',
//     alignItems: 'center',
//     marginRight: theme.spacing(1)
//   },
//   active: {
//     color: theme.palette.primary.main,
//     fontWeight: theme.typography.fontWeightMedium,
//     '& $icon': {
//       color: theme.palette.primary.main
//     }
//   },
  
// }));


export const mainListItems = (
 
  <div>
    {/* DASHBOARD */}
    {/* <Link href="/dashboard" color="inherit">
      <ListItem button>     
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        <ListItemText primary="Dashboard" />    
      </ListItem>
    </Link> */}
    <RouterLink to="/dashboard" className="link" activeClassName='selected' activeStyle={{
      fontWeight: "bold",
      color: "#01579b",
      // backgroundColor:"black"
    }} >
      <ListItem button>     
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        <ListItemText primary="Dashboard" />    
      </ListItem>
    </RouterLink>
    {/* USER */}
    <RouterLink to="/user" className="link" activeStyle={{
      fontWeight: "bold",
      color: "#01579b",
      // backgroundColor:"black"
    }} > 
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>
    </RouterLink>



    <ListItem button>
       
      {/* <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" /> */}
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);