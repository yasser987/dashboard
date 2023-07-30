import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  Grid,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function profile() {
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const names = session?.user?.name ? session?.user.name.split(" ") : [];
  const firstName = names[0];
  const lastName = names?.length > 1 ? names[names?.length - 1] : "";
  const emailAddress = session?.user?.email;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receivedEmail" ? checked : value,
    }));
  };

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: emailAddress,
    password: "",
    confirmPassword: "",
    receivedEmail: false,
  });

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <Box sx={{ margin: "0 auto" }} width={isMobile ? "90%" : "75%"}>
      <h1>profile</h1>
      <Box>
        <Typography variant="h4" marginBottom={3}>
          Hey {session ? session?.user?.name : "User"}, Welcome to your profile
        </Typography>
        <Paper sx={{ padding: "1rem 2rem" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={session?.user?.image as string}
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                />
              </Box>
              <form
                onSubmit={handleSumbit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="receivedEmail"
                          checked={formData.receivedEmail}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="Receive sales analyics emails"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit">Save Changes</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}
