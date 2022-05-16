import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const PokeStats = ({ pokemon }) => {
  let barColor = "#000000";
  pokemon.types && (barColor = `var(--${pokemon.types[0]})`);

  const StatProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 10,
    border: "2px solid #000000",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#ffffff",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: barColor,
    },
  }));

  return (
    <div className="pokedetails__stats">
      <h5>Stats</h5>
      {pokemon.stats &&
        pokemon.stats.map((stat) => (
          <>
            <div className="pokeStat">
              <div className="stat_label">
                <span key={stat.name}>{stat.name}</span>
              </div>
              <div className="stat_value">{stat.value}</div>
              <div className="stat_progress">
                {}
                <StatProgress
                  variant="determinate"
                  value={(stat.value * 100) / 200}
                />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default PokeStats;
