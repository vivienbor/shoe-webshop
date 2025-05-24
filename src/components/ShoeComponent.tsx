import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Shoe } from "../types/Shoe.type";

type Props = {
  shoe: Shoe;
  addShoeToCart(newShoe: Shoe): void;
  handleFavourite(selectedShoe: Shoe): void;
};

export default function ShoeComponent(props: Props) {
  const { shoe, addShoeToCart, handleFavourite } = props;
  const { brand, name, price, isFav } = shoe;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {brand}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        {isFav ? (
          <Button size="small" onClick={() => handleFavourite(shoe)}>
            favourite
          </Button>
        ) : (
          <Button size="small" onClick={() => handleFavourite(shoe)}>
            +
          </Button>
        )}
        <Button size="small" onClick={() => addShoeToCart(shoe)}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
