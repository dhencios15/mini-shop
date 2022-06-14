import {
  createStyles,
  Title,
  Button,
  Group,
  Text,
  Image,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { ChevronLeft } from "tabler-icons-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import productsData from "../utils/product_data.json";
import { toPeso } from "../utils/formatter";
import React from "react";
import { ProductList } from "../components/ProductList.";
import { Layout } from "../components/Layout";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const getRandomInt = (max: number = 10) => Math.floor(Math.random() * max);

export const ProductPage = () => {
  const { products } = productsData;
  const params = useParams();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { slug } = params;
  const randomNumber = getRandomInt();

  const product = products.find((product) => product.slug === slug);
  const productsWithSameCategories = React.useMemo(() => {
    if (!product) return [];
    return products
      .slice(randomNumber, randomNumber + 4)
      .filter(
        (productData) =>
          productData.name !== product.name &&
          productData.category === product.category
      );
  }, []);
  if (!product) {
    return <Navigate to="*" />;
  }

  return (
    <Layout>
      <Tooltip label="Back to home">
        <ActionIcon onClick={() => navigate("/")}>
          <ChevronLeft />
        </ActionIcon>
      </Tooltip>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>{product?.name}</Title>
          <Text weight="bold" size="xl" mt="md">
            {toPeso(product.price)}
          </Text>
          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              BUY NOW
            </Button>
          </Group>
        </div>
        <Image src={product.imageSrc} className={classes.image} />
      </div>
      <ProductList products={productsWithSameCategories} />
    </Layout>
  );
};
