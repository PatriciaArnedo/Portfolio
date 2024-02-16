import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: blur("10px"),
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PATRICIA ARNEDO
          </Typography>
          <Link
            target="_blank"
            href="https://medium.com/@patriciaarnedo"
            rel="noopener"
            color="inherit"
            typography="button"
            underline="none"
          >
            Blog
          </Link>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
