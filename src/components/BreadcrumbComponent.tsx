import { Box, capitalize } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router";

export default function BreadcrumbComponent() {
  const { gender, category } = useParams();

  return (
    <Box role="presentation" px={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to="/shoes"
          style={{
            textDecoration: "none",
            color: !gender ? "black" : "inherit",
          }}
        >
          Shoes
        </Link>
        {gender && (
          <Link
            to={`/shoes/${gender}`}
            style={{
              textDecoration: "none",
              color: !category ? "black" : "inherit",
            }}
          >
            {capitalize(gender)}
          </Link>
        )}
        {category && (
          <Link
            to={`/shoes/${category}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            {capitalize(category)}
          </Link>
        )}
      </Breadcrumbs>
    </Box>
  );
}
