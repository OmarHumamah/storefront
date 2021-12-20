import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";

import { setActiveCategory, reset } from "../store/category.js";

const Categories = (props) => {
  const useStyles = makeStyles({
    cat: {
      padding: "0 1rem",
      backgroundImage:
        "url(https://melbournegradecentre.org/wp-content/uploads/banner-bg.jpg)",
    },
  });

  const classes = useStyles();
  return (
    <section className={classes.cat}>
      <Grid container>
        <Typography variant="h5">Categories:</Typography>
        <ButtonGroup>
          <Button onClick={() => props.reset()}>All</Button>
          {props.catReducer.categories.map((cat) => {
            return (
              <Button onClick={() => props.setActiveCategory(cat.name)}>
                {cat.displayName}
              </Button>
            );
          })}
        </ButtonGroup>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state) => ({
  catReducer: state.catReducer,
});

const mapDispatchToProps = { setActiveCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
