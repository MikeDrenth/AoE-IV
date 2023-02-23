import React from "react";
import Link from "next/link";
import Image from "next/image";

// Styling components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface PlayerList {
  count: number;
  event_leaderboard: number;
  leaderboard: [];
  start: number;
  total: number;
  request: [];
}

interface PlayerProps {
  country: string;
  drops: number;
  games: number;
  highest_rating: number;
  highest_streak: number;
  last_match_time: number;
  losses: number;
  lowest_streak: number;
  name: string;
  previous_rating: number;
  profile_id: number;
  rank: number;
  rating: number;
  steam_id: string;
  streak: number;
  wins: number;
}

const PlayerCard: React.FC = ({ request }: PlayerList) => {
  console.log(request.players);
  return (
    <>
      {request.players.map(
        (
          {
            name,
            profile_id,
            rank,
            rating,
            win_rate,
            wins_count,
            last_rating_change,
            avatars,
          }: PlayerProps,
          index: number
        ) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              maxWidth: "450px",
              backgroundColor: "#323232",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
            }}
          >
            <CardMedia
              component="img"
              image={`https:${avatars.full.replaceAll("https:", "")}`}
              alt={name}
              sx={{
                marginRight: "auto",
                width: "170px",
                height: "175px",
                objectFit: "cover",
                margin: "0",
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  flexDirection: "column",
                  display: "flex",
                  color: "#FFFFFF",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" component="div" color="#FFFFFF">
                  <p>Rank: {rank}</p>
                  <p>Wins: {wins_count}</p>
                  <p>
                    Rating: {rating}{" "}
                    <small>{last_rating_change ?? last_rating_change}</small>
                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary"></Button>
              </CardActions>
            </Box>
          </Card>
        )
      )}
    </>
  );
};

export default PlayerCard;
