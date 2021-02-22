import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ProTip from './ProTip';

export default function Title() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          The Cannie Brain Atlas
          </Typography>
        {/* <ProTip /> */}
      </Box>
    </Container>
  );
}