import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';

import ImageCollage from '../components/QuiltedImageList';
import CustomizedAccordions from '../components/Accordion';
import BasicModal from '../components/BasicModal';

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component='h1' marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src='https://media.timeout.com/images/105124791/750/422/image.jpg'
          alt='vegas'
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant='h6' component='h4' marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant='body1' component='p' marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex placeat
          alias blanditiis incidunt. Quo hic ab sit ut, facilis explicabo!
          Aliquid expedita qui maxime dolorum necessitatibus nobis esse eveniet
          omnis temporibus. Asperiores nobis possimus, illum minima soluta autem
          natus consequatur praesentium quam, nemo exercitationem optio cumque!
          Aperiam ab hic consequatur.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
