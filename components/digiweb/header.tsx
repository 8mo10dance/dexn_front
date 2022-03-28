import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = 230;

const useStyles = makeStyles(
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">DigiWeb</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
