import { Box, Select, SimpleGrid } from "@mantine/core";
import { Product } from "../utils/types";
import ProductCard from "./ProductCard";

const filters = [
  { label: "All", value: "all" },
  { label: "Shoes", value: "shoes" },
  { label: "Shirts", value: "shirts" },
];

interface Props {
  setFilter?: (val: string) => void;
  filter?: string;
  products: Product[];
}

export const ProductList = ({ setFilter, filter, products }: Props) => {
  return (
    <Box>
      {setFilter && (
        <Select
          mb="xl"
          sx={{ width: 300 }}
          placeholder="Category filter"
          value={filter}
          onChange={(val) => val && setFilter(val)}
          data={filters}
        />
      )}
      <SimpleGrid
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
        cols={4}
        spacing="xl"
      >
        {products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
