import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface MatchProps {
  started: number;
  match_id: string;
  players: [];
}

interface PlayerProp {
  civ: number;
  name: string;
  profile_id: number;
  rating: number;
  rating_change: number;
  won: null;
  team: number;
}

const civilization = [
  {
    id: 0,
    name: "Abbasid",
  },
  {
    id: 1,
    name: "Chinese",
  },
  {
    id: 2,
    name: "Delhi",
  },
  {
    id: 3,
    name: "English",
  },
  {
    id: 4,
    name: "French",
  },
  {
    id: 5,
    name: "Holy Romand Empire",
  },
  {
    id: 6,
    name: "Mongols",
  },
  {
    id: 7,
    name: "Rus",
  },
];

console.log(civilization);

const Player: NextPage = (request) => {
  console.log(request.request);
  return (
    <div>
      <Head>
        <title>AoE IV - Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h3>Match history</h3>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Opponent</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
                <TableRow>
                  {request.request.map(
                    ({ started, match_id, players }: MatchProps) => (
                      <Grid key={match_id} container spacing={2}>
                        <React.Fragment key={players[0].profile_id}>
                          <TableCell>{started}</TableCell>
                          <TableCell>
                            <Image
                              src={`/images/civs/${players[0].civ}.png`}
                              alt="Landscape picture"
                              width={25}
                              height={15}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {players[0].name}
                          </TableCell>
                          <TableCell>{players[1].rating}</TableCell>
                          <TableCell>{players[1].rating}</TableCell>
                          <TableCell>{players[1].name}</TableCell>
                          <TableCell>
                            <Image
                              src={`/images/civs/${players[1].civ}.png`}
                              alt="Landscape picture"
                              width={25}
                              height={15}
                            />
                          </TableCell>
                        </React.Fragment>
                      </Grid>
                    )
                  )}
                </TableRow>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://aoeiv.net/api/player/matches?game=aoe4&profile_id=6943917&count=10"
  );
  // console.log(res.json());
  const request = await res.json();
  return {
    props: { request },
  };
};

export default Player;
