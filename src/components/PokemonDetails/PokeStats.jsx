import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const PokeStats = ({ pokemon }) => {
  return (
    <div className="pokedetails__stats">
      <h5>Stats</h5>
      {pokemon.stats &&
        pokemon.stats.map((stat) => (
          <>
            <div className="pokeStat">
              <span key={stat.name}>{stat.name}</span>
              <span key={stat.value}>{stat.value}</span>
              <Box
                sx={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {stat.value}
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={stat.value} />
                </Box>
              </Box>
            </div>
          </>
        ))}
    </div>
  );
};

export default PokeStats;
