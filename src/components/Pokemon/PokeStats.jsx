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
              <span key={Object.keys(stat)}>{Object.keys(stat)}</span>
              <span key={Object.values(stat)}>{}</span>
              <Box
                sx={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {Object.values(stat)}
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(Object.values(stat) * 100) / 200}
                  />
                </Box>{" "}
              </Box>
            </div>
          </>
        ))}
    </div>
  );
};

export default PokeStats;
