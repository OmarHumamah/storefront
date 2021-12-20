import { Button, ButtonGroup, Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {getAllProds, setActiveProds} from '../store/product'
import { addToCart } from '../store/cart'
 
const Products = props => {
const useStyle = makeStyles({
display: {
  height: '70vh',
  padding: '1rem',
  backgroundImage: 'url(https://melbournegradecentre.org/wp-content/uploads/banner-bg.jpg)'
},
card: {
height: '12rem',
},
addBtn:{
  position:'relative',
  left: '10rem',
  top: '2rem'
}
})

const classes = useStyle();
  return (
    <section className={classes.display}>
      <Grid container spacing={3} >
        {props.prodReducer.products
        .filter(product => props.catReducer.activeCategory? product.category === props.catReducer.activeCategory:true).filter(product=> product.inventory > 0).map(product => {
          return (
            <Grid item xs={3}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Typography variant="body1">{product.price}JD</Typography>
                  <ButtonGroup className={classes.addBtn} >
                  <Button  onClick={()=>props.addToCart(product)} >Add to Cart</Button>
                  </ButtonGroup>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer
});


const mapDispatchToProps = { getAllProds, setActiveProds, addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(Products);
