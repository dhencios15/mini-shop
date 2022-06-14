import { Container, Space } from "@mantine/core";
import React from "react";
import BaseNavbar from "../components/BaseNavbar";
import { ProductList } from "../components/ProductList.";
import productsData from "../utils/product_data.json";

export const Home = () => {
  const { products } = productsData;
  const [filter, setFilter] = React.useState<string>("all");

  const products_data = React.useMemo(() => {
    if (filter === "all") return products;
    return products.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <Container size={1300}>
      <BaseNavbar />
      <ProductList
        products={products_data}
        filter={filter}
        setFilter={(val) => setFilter(val)}
      />
      <Space mt="xl" />
    </Container>
  );
};
