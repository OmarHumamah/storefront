import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3">Storefront</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default Header;
