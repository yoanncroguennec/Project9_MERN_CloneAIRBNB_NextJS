import React, { useState } from "react";
import cookie from "js-cookie";
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


////////////////////// EXPORT FUNCTION //////////////////////
export default function Login({
  openModalAuth,
  setOpenModalAuth,
  switchAuth,
  setSwitchAuth,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // console.log(email, password);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        config
      );

      cookie.set("token", data?.token);
      cookie.set("user", JSON.stringify(data?.user));
      
      toast.success("Connexion réussi");

      window.location.reload();
      setOpenModalAuth(!openModalAuth);
    } catch (error) {
      // console.log(error.response)
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Box>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
      <Typography variant='h5'>Se Connecter</Typography>
      <Box component='form' noValidate onSubmit={SubmitHandler} sx={{ mt: 3 }}>
        <Grid>
          <Grid container spacing={2}>
            <TextField
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='Mot de passe'
              type='password'
              id='password'
              autoComplete='mot-de-passe-actuel'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 2, mb: 2, backgroundColor: "secondary.main" }}
        >
          Se connecter
        </Button>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Typography onClick={() => setSwitchAuth(!switchAuth)}>
              Pas de compte ? S&apos;inscrire
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
