import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

function Cart(props) {
  const useStyles = makeStyles({
    cart: {
      zIndex: 100,
      position: "fixed",
      left: "88%",
      top: "64px",
      width: "9rem",
      
      
    },
    item:{
      border: 'solid #333237 2px',
      backgroundColor: "#CAC2B2",
      opacity: "0.7",
      borderRadius: '5px',
      padding: '.3rem 1rem',
      margin: '.3rem 0rem',
      boxShadow: 'black 0px 0px 5px'
    }
  });

  const classes = useStyles();

  return (
    <Grid item xs className={classes.cart}>
      {props.cartReducer.cart.map(item => {
        return (
          <p className={classes.item}>{item.name}</p>
        )
      })}
    </Grid>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);