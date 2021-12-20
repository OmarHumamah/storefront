import { Typography, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

const ActiveCategory = props => {
  const useStyles = makeStyles({
    TVs: {
      backgroundImage: 'url(https://articlewipe.com/wp-content/uploads/2019/02/ledtv_banner_yayvo.jpg)',
      backgroundSize: 'cover',
      color: '#CAC2B2',
    },
    Phons:{
      backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-cameraphones-1585581348.jpg?crop=0.963xw:0.962xh;0.0228xw,0&resize=1600:*)',
      backgroundSize: 'cover',
      color: '#543A40',
    },
    Watches:{
      backgroundImage: 'url(https://image.lucrin.com/is/image/Lucrin/smartwatch-banner?wid=2000&$parallax-banner$&$image-better-res$)',
      backgroundSize: 'cover',
      color: '#CAC2B2',
    }
  })

  const classes = useStyles();
  let catName = props.catReducer.activeCategory;
  return (
    <section className={classes[catName]}>
      <Typography variant="h2" align="center" component="h1">{catName}</Typography>
    </section>
  )
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
});

export default connect(mapStateToProps)(ActiveCategory);