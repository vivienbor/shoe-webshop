import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, capitalize, Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { BagContext, type BagContextType } from "../contexts/BagContext";
import type { BagItem } from "../types/BagItem.type";
import { useNavigate } from "react-router";

type Props = {
  item: BagItem;
};

export default function BagItemComponent(props: Props) {
  const { item } = props;
  const { increaseShoeQuantity, decreaseShoeQuantity, removeItem } = useContext(
    BagContext
  ) as BagContextType;
  const navigate = useNavigate();

  return (
    <Grid
      size={12}
      sx={{
        borderRadius: 0,
        borderTop: 1,
        borderColor: { xs: "lightgrey" },
      }}
    >
      <Card elevation={0} sx={{ py: 4 }}>
        <CardContent sx={{ p: 0, pb: 0, "&:last-child": { pb: 0 } }}>
          <Grid container>
            <Grid size={{ xs: 5, md: 3 }}>
              <CardMedia
                component="img"
                height="150px"
                width="150px"
                image={item.shoe.image}
                alt={item.shoe.name}
                onClick={() =>
                  navigate(`/shoe/${item.shoe.name}`, { replace: true })
                }
                sx={{ cursor: "pointer" }}
              />
            </Grid>
            <Grid size={{ xs: 7, md: 9 }} pl={1}>
              <Typography variant="body2" fontSize="1.1em">
                € {item.shoe.price}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1.1em"
                gutterBottom
                component="div"
                m={0}
              >
                {item.shoe.name}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1.1em"
                sx={{ color: "text.secondary" }}
              >
                {capitalize(item.shoe.category)}
              </Typography>
              <Typography
                variant="body2"
                fontSize="1.1em"
                sx={{ color: "text.secondary" }}
              >
                Size {item.size}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Box
                border={1}
                borderRadius={500}
                borderColor="lightgrey"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "100px",
                  height: "40px",
                  justifyContent: "space-between",
                  mt: 2,
                }}
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
