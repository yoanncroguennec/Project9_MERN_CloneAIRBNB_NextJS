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
import Image from "next/image";

export default function Register({
  openModalAuth,
  setOpenModalAuth,
  switchAuth,
  setSwitchAuth,
}) {

  // UPLOAD IMG
      const [imageSrc, setImageSrc] = useState();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
// 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // console.log(email, password);

            if (password !== confirmPassword) {
              toast.error("passwords do not match!");
              // console.log("passwords do not match")
              return;
            }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/users/register`,
        { email, password },
        config
      );
    } catch (error) {
      // console.log(error.response);
      // console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <Box>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
      <Typography component='h1' variant='h5'>
        S&apos;Inscrire
      </Typography>
      <Box component='form' noValidate onSubmit={SubmitHandler} sx={{ mt: 3 }}>
        <Grid>
          <Grid container spacing={2}>
            <input type='file' name='file' onChange={handleOnChange} />

            {imageSrc !== undefined && (
              <Image alt='' height={450} src={imageSrc} width={450} />
            )}
            {/*  */}

            <TextField
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='family-name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id='email'
              label='Email Address'
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
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirm password'
              label='Confirm Password'
              type='password'
              id='confirm password'
              autoComplete='current-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Typography onClick={() => setSwitchAuth(!switchAuth)}>
              Un compte ? Connectez-vous
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
