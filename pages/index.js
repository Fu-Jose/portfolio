import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Item,
  Paper,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      <Head>
        <title>Juan Fu Web Dev</title>
        <meta name="description" content="Juan Fu personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid container>
          <Grid
            container
            backgroundColor="#FFF"
            height={{ xs: "120px" }}
            paddingTop={5.5}
            paddingBottom={10}
            justifyContent="space-around"
            // xs={12}
            // lg={3}
          >
            <Avatar
              alignSelf="center"
              src="https://res.cloudinary.com/donxjonx/image/upload/v1637598838/foto3_ykzrmv.jpg"
              style={{ height: 150, width: 150 }}
            />
            {/* <Grid item>
              <Typography>Home</Typography>
            </Grid> */}
            <Grid item>
              <Typography fontSize={24}>About Me</Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={24}>Projects</Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={24}>Skills</Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={24}>Contact</Typography>
            </Grid>
          </Grid>
          <Grid item paddingX={15} paddingY={20}>
            <Typography variant="h1" color="white" sx={{ fontWeight: "bold" }}>
              Hi, I'm Juan. <br />
              web developer.
            </Typography>
          </Grid>
        </Grid>
      </main>
    </Grid>
  );
}
