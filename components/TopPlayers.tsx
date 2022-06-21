import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SearchField } from "./SearchField";
import Link from "next/link";

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

const TopPlayers: React.FC = ({ request }: PlayerList) => {
  console.log(request.leaderboard);
  return (
    <>
      <h3>
        Ranked leaderboard <SearchField />
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Wins</TableCell>
              <TableCell align="right">Rank</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {request.leaderboard.map(
              ({ name, profile_id, wins, rank, rating }: PlayerProps) => (
                <TableRow
                  key={profile_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link href={`/player/${encodeURIComponent(profile_id)}`}>
                      <a>{name}</a>
                    </Link>
                  </TableCell>
                  <TableCell align="right">{wins}</TableCell>
                  <TableCell align="right">{rank}</TableCell>
                  <TableCell align="right">{rating}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TopPlayers;
