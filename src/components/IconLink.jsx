import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function IconStack(props) {
  const { Emoji, MainTitle, SubTitle } = props;
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item
          style={{
            maxWidth: '50px',
            maxHeight: '50px',
            marginTop: '20px',
          }}
        >
          {' '}
          {Emoji}
        </Item>
        <Stack direction="row" spacing={2}>
          <div
            style={{
              background: 'none',
              marginTop: '30px',
            }}
          >
            <Typography
              variant="body2"
              color="text.dark"
              sx={{ fontWeight: 'bold', textAlign: 'left' }}
            >
              {MainTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="classNoWrap"
            >
              {SubTitle}
            </Typography>
          </div>
          <div style={{ marginTop: '', float: 'right' }}>
            <Link to="">
              <ArrowForwardIosIcon
                fontSize="small"
                sx={{
                  marginTop: '35px',
                  color: 'lightGrey',
                }}
              />
            </Link>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
