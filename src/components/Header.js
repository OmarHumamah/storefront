import { AppBar, Toolbar, Typography, Box, Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

function Header(props) {

  const useStyles = makeStyles({
    header: {
      backgroundColor: '#333237',
      color: '#CAC2B2',
    },
    cart:{
      position: "relative",
      left: '72.9%',
      color: "#CAC2B2",
      fontWeight: "bolder"
      
    },
   
  })

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.header} position="static">
          <Toolbar>
            <Typography variant="h3">Storefront</Typography>
            <ButtonGroup className={classes.cart}>
            <Button className={classes.cart}>Cart: {props.cartReducer.cart.length}</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}


const mapStateToProps = state => ({
  cartReducer: state.cartReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
