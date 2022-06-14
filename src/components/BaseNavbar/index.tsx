import React from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
  Center,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { useStyles } from "./BaseNavbar.style";

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export const HEADER_HEIGHT = 60;

const ActiveLink = ({ children, to }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const { classes, cx } = useStyles();

  return (
    <Link
      to={to}
      className={cx(classes.link, {
        [classes.linkActive]: match,
      })}
    >
      {children}
    </Link>
  );
};

export default function BaseNavbar() {
  const { classes } = useStyles();
  return (
    <Header height={HEADER_HEIGHT} mb="lg" className={classes.root}>
      <Title align="center">SHOP</Title>
    </Header>
  );
}
