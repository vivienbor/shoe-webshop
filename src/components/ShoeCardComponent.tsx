import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import type { Shoe } from "../types/Shoe.type";
import { useNavigate } from "react-router";

type Props = {
  shoe: Shoe;
};

export default function ShoeCardComponent(props: Props) {
  const { shoe } = props;
  const { image, name, category, price } = shoe;
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{ height: 300, borderRadius: 0 }}
      onClick={() => navigate(`/${name}`)}
    >
      <CardActionArea>
        <CardMedia component="img" height={200} image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom component="div" m={0}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {category}
          </Typography>
          <Typography variant="subtitle1" fontWeight={700} fontSize="1.25em">
            € {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
