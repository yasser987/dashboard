import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled, useTheme } from "@mui/material/styles";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import sass from "../../styles/Footer.module.scss";

export default function Footer() {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;
  return (
    <footer className={sass.footer}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul>
          <li>
            <FooterLink href={"/"}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/data"}>Data</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={"/#termsandconditions"}>
              Terms & Conditions
            </FooterLink>
          </li>
          <li>
            <FooterLink href={"/#accessabilitystatement"}>
              Accessibility statement
            </FooterLink>
          </li>
          <li>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
}
