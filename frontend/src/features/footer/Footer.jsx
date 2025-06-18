import {
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import React from "react";
import { facebookPng, instagramPng, tiktok } from "../../assets";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Just replace the whole component code with this:

export const Footer = () => {
  const theme = useTheme();
  const is900 = useMediaQuery(theme.breakpoints.down(900));
  const is700 = useMediaQuery(theme.breakpoints.down(700));
  const is480 = useMediaQuery(theme.breakpoints.down(480));

  const labelStyles = {
    fontWeight: 300,
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0.5rem",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "translateX(5px)",
    },
  };

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.primary.main,
        paddingTop: "3rem",
        paddingLeft: is700 ? "1rem" : "3rem",
        paddingRight: is700 ? "1rem" : "3rem",
        paddingBottom: "1.5rem",
        rowGap: "3rem",
        color: theme.palette.primary.light,
      }}
    >
      {/* Upper Footer Content */}
      <Stack
        flexDirection={"row"}
        rowGap={"1rem"}
        justifyContent={is700 ? "" : "space-around"}
        flexWrap={"wrap"}
      >
        <Stack rowGap={"1rem"} padding={"1rem"}>
          <Typography variant="h6" fontSize={"1.5rem"}>
            Exclusive
          </Typography>
          <Typography variant="h6">Subscribe</Typography>
          <Typography sx={labelStyles}>Get service updates</Typography>
          <TextField
            placeholder="Enter your email"
            sx={{
              border: "1px solid white",
              borderRadius: "6px",
              "&:hover": {
                boxShadow: "0 0 8px rgba(255,255,255,0.3)",
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SendIcon sx={{ color: theme.palette.primary.light }} />
                </IconButton>
              ),
              style: { color: "whitesmoke" },
            }}
          />
        </Stack>

        <Stack
          rowGap={"1rem"}
          padding={"1rem"}
          width={is480 ? "100%" : "auto"}
          maxWidth="280px"
        >
          <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
            Contact Us
          </Typography>

          <Box sx={contactItemStyle}>
            <LocationOnIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography sx={{ ...labelStyles, lineHeight: "1.6" }}>
              PV Enterprises,
              <br />
              Near Francis Alukkas Jewellery,
              <br />
              Ram Mohan Road, Chinthavalapp,
              <br />
              Kozhikode - 04
            </Typography>
          </Box>

          <Box sx={contactItemStyle}>
            <EmailIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography sx={labelStyles}>pventerprises@gmail.com</Typography>
          </Box>

          <Box sx={contactItemStyle}>
            <PhoneIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography sx={labelStyles}>
              +91 93873 38100, +91 94002 24860
            </Typography>
          </Box>
        </Stack>

        <Stack rowGap={"1rem"} padding={"1rem"}>
          <Typography variant="h6">Account</Typography>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Typography sx={labelStyles}>My Account</Typography>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Typography sx={labelStyles}>Cart</Typography>
          </Link>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <Typography sx={labelStyles}>Wishlist</Typography>
          </Link>
        </Stack>

        <Stack rowGap={"1rem"} padding={"1rem"}>
          <Typography variant="h6">Follow Us On</Typography>

          <Stack
            mt={0.6}
            flexDirection={"row"}
            columnGap={"1rem"}
            flexWrap="wrap"
          >
            <a
              href="https://www.facebook.com/pventerprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{ cursor: "pointer" }}
                src={facebookPng}
                alt="Facebook"
              />
            </a>

            <a
              href="https://www.instagram.com/pventerprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{ cursor: "pointer", width: "20px", height: "20px" }}
                src={instagramPng}
                alt="Instagram"
              />
            </a>
          </Stack>
        </Stack>
      </Stack>

      {/* Lower Footer Note */}
      <Stack alignSelf={"center"}>
        <Typography color={"GrayText"}>
          &copy; PV Enterprises {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};

