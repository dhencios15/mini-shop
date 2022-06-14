import { Container, Space } from "@mantine/core";
import React from "react";
import BaseNavbar from "./BaseNavbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Container size={1300}>
      <BaseNavbar />
      {children}
      <Space mt="xl" />
    </Container>
  );
};
