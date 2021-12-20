import { makeStyles, Typography } from "@material-ui/core";

function Footer() {
  const useStyles = makeStyles({
    footer: {
      backgroundColor: "#543A40",
      padding: '1rem',
      boxShadow: 'black 0px 0px 10px'
    },
  });

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" component="p" align="left">
        Contact info
      </Typography>
      <Typography variant="h7" component="li" align="left">
        omar.nabeel.h@gmaile
      </Typography>
      <Typography variant="h7" component="li" align="left">
        +962780813222
      </Typography>
      <Typography variant="h6" component="p" align="center">
        © Omar Store 2021
      </Typography>
    </footer>
  );
}

export default Footer;
