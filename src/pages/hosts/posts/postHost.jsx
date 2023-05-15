import React, { useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostHost({
}) {
  const [address, setAddress] = useState("");


  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // console.log(address);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`/api/hosts`, { address }, config);
    } catch (error) {
      // console.log(error.response);
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Box>
      <Typography component='h1' variant='h5'>
        Publier un hébergements
      </Typography>
      <Box component='form' noValidate onSubmit={SubmitHandler} sx={{ mt: 3 }}>
        <Grid>
          <Grid container spacing={2}>
            <TextField
              autoComplete='given-name'
              name='address'
              required
              fullWidth
              id='firstName'
              label='address'
              autoFocus
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 2, mb: 2, backgroundColor: "secondary.main" }}
        >
          Créer un compte
        </Button>
      </Box>
    </Box>
  );
}
