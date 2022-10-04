import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'transparent',
  boxShadow: 'none',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function Header() {
  return (
    <Grid container justify="center">
      <Stack spacing={2} direction="row">
        <Item>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: 'bold', marginTop: '150px' }}
            textAlign="right"
          >
            Image if
            <Typography
              variant="h4"
              color="neutral"
              sx={{
                fontWeight: 'bold',
                background: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Snapchat
            </Typography>
            had events.
          </Typography>
          <Typography
            variant="body1"
            textAlign="right"
            sx={{ width: '381px', color: '#4F4F4F' }}
          >
            Easily host and share events with your friends across any social
            media.
          </Typography>
          <div className="rightAlign">
            <Link href="/create">
              <Button
                variant="contained"
                color="secondary"
                className="InviteButton"
                style={{
                  background: `linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)`,
                  maxWidth: '1500px',
                  maxHeight: '105px',
                  marginTop: '40px',
                  padding: '14px 60px',
                }}
              >
                <Typography
                  variant="normal"
                  className="classNoWrap buttonTextBig"
                >
                  🎉 Create my event
                </Typography>
              </Button>
            </Link>
          </div>
        </Item>
      </Stack>
    </Grid>
  );
}
