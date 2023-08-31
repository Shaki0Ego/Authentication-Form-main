import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Paper from '@mui/material/Paper';

export default function AuthForm () {   
        return (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <FormGroup>
              <TextField
                id="email"
                label="Username"
                type="text"
                autoComplete="email"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button variant="contained" color="success">
                Log in
              </Button>
            </FormGroup>
            </Paper>
          </Box>
        );
    }
