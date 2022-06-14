import { Card, Image, Text, Group, Button, Badge } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { toPeso } from "../../utils/formatter";
import { Product } from "../../utils/types";
import { useStyles } from "./ProductCard.style";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { classes } = useStyles();

  const navigate = useNavigate();

  return (
    <Card shadow="md" withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={product.imageSrc} alt={product.slug} />
      </Card.Section>
      <Group position="apart" mt="md">
        <Text
          sx={{
            ":hover": {
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            },
          }}
          onClick={() => navigate(`/product/${product.slug}`)}
          weight={500}
        >
          {product.name}
        </Text>
        <Badge color="green">Shoes</Badge>
        <Group spacing={30}>
          <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
            {toPeso(product.price)}
          </Text>
          <Button radius="xl" style={{ flex: 1 }}>
            Buy Now
          </Button>
        </Group>
      </Group>
    </Card>
  );
}
