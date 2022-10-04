import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import BirthdayCake from '../assets/BirthdayCake.png';
// import Movie from '../assets/Movie.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import IconStack from './IconLink';
import Header from './Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f',
      light: '#FFF',
    },
    secondary: {
      main: purple[500],
      light: '#ff7961',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function MainContent() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Card sx={{ minWidth: 340 }}>
          <CardMedia
            component="img"
            alt="Birthday Cake Image"
            height="240"
            image={BirthdayCake}
          />
          <CardContent>
            <div className="MovieHeader">
              <Typography gutterBottom variant="h5" component="div">
                Movie night
              </Typography>

              <div className="HostedSub">
                <Typography variant="body3" className="HostedSub">
                  👋 Hosted by Elysia
                </Typography>
              </div>
            </div>
            <Item>
              <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
              >
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="div"
                  className="classNoWrap"
                >
                  14 response
                </Typography>
                <span className="bulletPoint">•</span>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="div"
                  className="classNoWrap"
                  color="secondary"
                >
                  see guests
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="InviteButton"
                  style={{
                    background: `#8456EC`,
                    maxWidth: '100px',
                    maxHeight: '25px',
                    borderRadius: '8px',
                    marginLeft: '40px',
                  }}
                >
                  <Typography
                    variant="normal"
                    className="classNoWrap buttonText"
                  >
                    🤝 Invite
                  </Typography>
                </Button>
              </Stack>
            </Item>
            <Stack spacing={2}></Stack>
            <div>
              <Stack spacing={2}>
                <div>
                  <IconStack
                    Emoji="📆"
                    MainTitle="18 August 6:00PM"
                    SubTitle="to 19 August 1:00PM UTC +10"
                  />
                </div>
                <div>
                  <IconStack
                    Emoji="📍"
                    MainTitle="Street name"
                    SubTitle="301 Rowes Land, WA, 7183"
                  />
                </div>
                <div>
                  <IconStack
                    Emoji="🔗"
                    MainTitle="Link"
                    SubTitle="netflix.com"
                  />
                </div>
              </Stack>
            </div>
          </CardContent>
        </Card>
        <Header />
      </Stack>
    </ThemeProvider>
  );
}
