"use client";
import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import JCL from "@/public/common/jcl.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {};

const navItems = [
  { links: "/#services", name: "Services" },
  { links: "/our-work", name: "Our Work" },
  { links: "/careers", name: "Careers" },
  { links: "/contact-us", name: "Contact Us" },
];

const Header = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Image src={JCL} alt="JCL Logo" width={200} height={86} />
      </Link>
      <Divider />
      <List className={styles.mobileLinksBox}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.links}
            className={styles.mobileLinks}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "left",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    textDecoration: "none",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <header className={styles.headerBox}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          className={styles.headerMain}
        >
          <Grid item xs={4}>
            <Link href="/">
              <Image src={JCL} alt="JCL Logo" width={285} height={46} />
            </Link>
          </Grid>
          <Grid
            item
            container
            xs={8}
            alignItems="center"
            justifyContent="flex-end"
            columnSpacing={5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item, index) => {
              return (
                <Grid item key={index}>
                  <Link href={item.links}>{item.name}</Link>
                </Grid>
              );
            })}
          </Grid>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
