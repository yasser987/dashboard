import React from "react";
import { useSession } from "next-auth/react";
import SideMenu from "../SideMenu";
import Head from "next/head";
import sass from "../../../styles/Layout.module.scss";
import Footer from "../Footer";

export default function Layout(props: any) {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>data dashboard</title>
        <meta name="description" content="data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={sass.layout}>
        {session && <SideMenu />}
        {props.children}
        <Footer />
      </main>
    </>
  );
}
