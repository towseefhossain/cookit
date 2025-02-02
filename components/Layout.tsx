import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} href="/">Home</Button>
        <Button color="inherit" component={Link} href="/about">About</Button>
        <Button color="inherit" component={Link} href="/skilltrees/basic">Skill Trees</Button>
        <Button color="inherit" component={Link} href="/recipes">Recipes</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Box my={4}>
        {children}
      </Box>
    </Container>
    <footer>
      <Box mt={4}>
        <hr />
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
      </Box>
    </footer>
  </div>
);

export default Layout;
