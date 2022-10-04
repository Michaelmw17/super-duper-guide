import React, { useReducer } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MaterialUIFormSubmit(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
    root: {
      padding: theme.spacing(3, 2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      EventName: '',
      HostName: '',
      StartDate: '',
      EndDate: '',
      Location: '',
      EventPhoto: '',
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Item>
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
              Fill in the details to create your event
            </Typography>
            <Item>
              <TextField
                label="Event Name"
                id="margin-normal"
                name="name"
                defaultValue={formInput.EventName}
                helperText="Enter Event name"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <TextField
                label="Host Name"
                id="margin-normal"
                name="name"
                defaultValue={formInput.HostName}
                helperText="Enter your host name"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <TextField
                label="Start Date"
                id="margin-normal"
                name="name"
                defaultValue={formInput.StartDate}
                helperText="Enter your Start Date"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <TextField
                label="End Date"
                id="margin-normal"
                name="name"
                defaultValue={formInput.EndDate}
                helperText="Enter your End Date"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <TextField
                label="Location"
                id="margin-normal"
                name="name"
                defaultValue={formInput.Location}
                helperText="Enter your Location"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <TextField
                label="Event Photo"
                id="margin-normal"
                name="name"
                defaultValue={formInput.EventPhoto}
                helperText="Enter your Event Photo"
                onChange={handleInput}
              />
            </Item>
            <Item>
              <Link href="/event">
                <Button
                  variant="contained"
                  color="secondary"
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
            </Item>
          </Item>
        </Stack>
      </form>
    </div>
  );
}
