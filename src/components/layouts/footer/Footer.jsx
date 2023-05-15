import { Typography, styled, Box } from "@mui/material";
// DATA
import dataFooter from "../../../utils/data/dataFooter.json";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Footer() {
  ////////////////////// STYLES //////////////////////
  const RootFooter = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  }));

  const ListColumnFooter = styled(Box)(({ theme }) => ({
    margin: "15px 15px", // top/bottom right/left
  }));

  ////////////////////// RETURN //////////////////////
  return (
    <RootFooter>
      {dataFooter.map(({ titleListColumn, listColumnFooter }) => (
        <ListColumnFooter>
          <Typography variant='h4'>{titleListColumn}</Typography>
          {listColumnFooter.map(({ title }) => (
            <Typography variant='h6' key={title}>{title}</Typography>
          ))}
        </ListColumnFooter>
      ))}
    </RootFooter>
  );
}
