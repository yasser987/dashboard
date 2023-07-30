import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, Button } from "@mui/material";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Authorize User </p>
        <p>Name: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <div>
      <p>Guest User</p>
      <Button variant={"contained"} color="success" onClick={() => signIn()}>
        Sign In
      </Button>
    </div>
  );
}
