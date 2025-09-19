import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import type { BagItem } from "../types/BagItem.type";

type Props = {
  item: BagItem;
};

export default function BagItemComponent(props: Props) {
  const { item } = props;
  const { increaseShoeQuantity, decreaseShoeQuantity, removeItem } = useContext(
    BagContext
  ) as BagContextType;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        marginX: "20px",
        paddingY: "30px",
        borderTop: 2,
        borderColor: "lightgrey",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid size={5}>
            <CardMedia
              component="img"
              height="90%"
              image={item.shoe.image}
              alt={item.shoe.name}
            />
          </Grid>
          <Grid size={7}>
            <CardContent>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                fontSize="1.25em"
              >
                € {item.shoe.price}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                fontSize="1.25em"
                gutterBottom
                component="div"
                m={0}
              >
                {item.shoe.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.shoe.category}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Size {item.size}
              </Typography>
              <Box
                sx={{ display: "inline-flex", alignItems: "center" }}
                border={1}
                borderRadius={5}
              >
                {item.quantity > 1 ? (
                  <IconButton onClick={() => decreaseShoeQuantity(item)}>
                    <RemoveIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => removeItem(item)}>
                    <DeleteOutlineTwoToneIcon />
                  </IconButton>
                )}
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => increaseShoeQuantity(item)}>
                  <AddTwoToneIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
