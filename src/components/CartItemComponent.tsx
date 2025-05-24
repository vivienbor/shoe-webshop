import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { CartItem } from "../types/CartItem.type";

type Props = {
  item: CartItem;
  handleRemoveItemFromCart(selectedItem: CartItem): void;
};

export default function CartItemComponent(props: Props) {
  const { item, handleRemoveItemFromCart } = props;
  const { shoe, quantity } = item;
  const { brand, name, price } = shoe;

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
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleRemoveItemFromCart(item)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
