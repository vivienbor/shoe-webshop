import { useContext } from "react";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import BagItemComponent from "../components/BagItemComponent";
import { Box, Stack, Typography } from "@mui/material";

export function BagPage() {
  const { bag } = useContext(BagContext) as BagContextType;

  return (
    <Box>
      <Stack direction="column" alignItems="center" m="30px">
        <Typography variant="h5">Bag</Typography>
        <Stack direction="row" alignItems="center">
          <Typography color="grey">{bag.items.length} Products </Typography>
          <Typography ml={1} mr={1}>
            |
          </Typography>
          <Typography>€ {bag.sum}</Typography>
        </Stack>
      </Stack>
      {bag.items.map((item) => (
        <BagItemComponent item={item} />
      ))}
    </Box>
  );
}
