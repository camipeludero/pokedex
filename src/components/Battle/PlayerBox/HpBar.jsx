import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const HpBar = ({ player }) => {
  let progress = (player.hp * 100) / player.hpMax;

  let barColor =
    progress > 50
      ? "#A7B723"
      : progress > 10
      ? "#F9CF30"
      : progress > 0
      ? "#C12239"
      : "#FFFFFF";

  const HpBar = styled(LinearProgress)(({ theme }) => ({
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
    <div>
      <Box sx={{ width: "100%" }}>
        <HpBar variant="determinate" value={progress} />
      </Box>
    </div>
  );
};

export default HpBar;
