import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Menu,
  MenuItem,
  OutlinedInput,
  TextField,
  Grid,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PiListFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import menuItemsData from "../data/itemmenu.json";
import video from "../videos/videos.mp4";
import { animateScroll as scroll } from "react-scroll";

function Header() {
  const [anchoreml, setanchoreml] = useState(null);
  const [anchoreml1, setanchoreml1] = useState(null);
  const [anchoreml2, setanchoreml2] = useState(null);
  const [anchoreml3, setanchoreml3] = useState(null);
  const [anchoreml4, setanchoreml4] = useState(null);
  const [anchoreml5, setanchoreml5] = useState(null);
  const [anchoreml6, setanchoreml6] = useState(null);
  const [anchoreml7, setanchoreml7] = useState(null);

  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);
  const [open5, setopen5] = useState(false);
  const [open6, setopen6] = useState(false);
  const [open7, setopen7] = useState(false);

  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Adjust the value based on when you want the button to appear
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setMenuVisible(false);
      } else {
        setMenuVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const headleClose = (e) => {
    setanchoreml(null);
    setopen(false);
  };

  const headleClose1 = (e) => {
    setanchoreml1(null);
    setopen1(false);
  };

  const headleClose2 = (e) => {
    setanchoreml2(null);
    setopen2(false);
  };

  const headleClose3 = (e) => {
    setanchoreml3(null);
    setopen3(false);
  };

  const headleClose4 = (e) => {
    setanchoreml4(null);
    setopen4(false);
  };
  const headleClose5 = (e) => {
    setanchoreml5(null);
    setopen5(false);
  };
  const headleClose6 = (e) => {
    setanchoreml6(null);
    setopen6(false);
  };
  const headleClose7 = (e) => {
    setanchoreml7(null);
    setopen7(false);
  };

  const headleClick = (e) => {
    setanchoreml(e.currentTarget);
    setopen(true);
  };

  const headleClick1 = (e) => {
    setanchoreml1(e.currentTarget);
    setopen1(true);
  };

  const headleClick2 = (e) => {
    setanchoreml2(e.currentTarget);
    setopen2(true);
  };

  const headleClick3 = (e) => {
    setanchoreml3(e.currentTarget);
    setopen3(true);
  };

  const headleClick4 = (e) => {
    setanchoreml4(e.currentTarget);
    setopen4(true);
  };

  const headleClick5 = (e) => {
    setanchoreml5(e.currentTarget);
    setopen5(true);
  };
  const headleClick6 = (e) => {
    setanchoreml6(e.currentTarget);
    setopen6(true);
  };
  const headleClick7 = (e) => {
    setanchoreml7(e.currentTarget);
    setopen7(true);
  };

  return (
    <div className="background-video">
      <video src={video} autoPlay muted loop className="video" />
      <div className="menu">
        <Grid container>
          <Grid item xs={12}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: isMenuVisible
                  ? "rgba(0, 0, 0, 0.7)"
                  : "transparent",
                color: "#fff",
                zIndex: 100,
                overflow: "hidden",
                position: "fixed",
                transition: (theme) =>
                  theme.transitions.create("background-color", {
                    duration: 300,
                  }),
                display: isMenuVisible ? "block" : "none",
              }}>
              <Toolbar
                sx={{
                  justifyContent: "space-between",
                }}
                className="toolbar">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo">
                  <img
                    src="images/logo2x.png"
                    alt="logo"
                    width={92}
                    height={22}
                  />
                </IconButton>
                <Stack direction="row" spacing={2}>
                  <Button
                    className="menu-text"
                    color="inherit"
                    onClick={headleClick}
                    onMouseEnter={headleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Home
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml}
                    open={open}
                    onClose={headleClose}
                    MenuListProps={{ onMouseLeave: headleClose }}>
                    {menuItemsData.menu_user.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    className="menu-text"
                    color="inherit"
                    onClick={headleClick1}
                    onMouseEnter={headleClick1}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Tours
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml1}
                    open={open1}
                    onClose={headleClose1}
                    MenuListProps={{ onMouseLeave: headleClose1 }}>
                    {menuItemsData.menu_tour.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose1}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick2}
                    onMouseEnter={headleClick2}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Booking
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml2}
                    open={open2}
                    onClose={headleClose2}
                    MenuListProps={{ onMouseLeave: headleClose2 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_booking.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose2}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick3}
                    onMouseEnter={headleClick3}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Destinations
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml3}
                    open={open3}
                    onClose={headleClose3}
                    MenuListProps={{ onMouseLeave: headleClose3 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_Destinations.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose3}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick4}
                    onMouseEnter={headleClick4}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Pages
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml4}
                    open={open4}
                    onClose={headleClose4}
                    MenuListProps={{ onMouseLeave: headleClose4 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_Pages.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose4}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick5}
                    onMouseEnter={headleClick5}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Blogs
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml5}
                    open={open5}
                    onClose={headleClose5}
                    MenuListProps={{ onMouseLeave: headleClose5 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_Blogs.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose5}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick6}
                    onMouseEnter={headleClick6}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Shortcodes
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml6}
                    open={open6}
                    onClose={headleClose6}
                    MenuListProps={{ onMouseLeave: headleClose6 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_Shortcodes.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose6}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Button
                    color="inherit"
                    onClick={headleClick7}
                    onMouseEnter={headleClick7}
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{ "font-size": "13px" }}>
                    Shop
                  </Button>
                  <Menu
                    className="menu-text"
                    anchorEl={anchoreml7}
                    open={open7}
                    onClose={headleClose7}
                    MenuListProps={{ onMouseLeave: headleClose7 }}
                    xs={{ width: "240px" }}>
                    {menuItemsData.menu_Shop.map((option, index) => (
                      <MenuItem
                        key={index}
                        onClick={headleClose7}
                        style={{ borderBottom: "1px solid #ccc" }}
                        className="menu-item">
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo">
                    <PiListFill className="shopping-cart" />
                  </IconButton>
                  <div className="header_cart_wrapper">
                    <div className="cart-count">0</div>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="logo">
                      <MdOutlineShoppingCart className="shopping-cart" />
                    </IconButton>
                  </div>
                </Stack>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </div>
      <div className="standard_wrapper">
        <h2 className="ppb_title">Where do you want to go?</h2>
        <span className="page_tagline">
          Trips, experiences, and places. All in one service.
        </span>
        <Grid container>
          <Grid item xs={12}>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<IoSearchOutline />}
              size="small"
              placeholder="Destination, city"
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginLeft: "20px",
                marginTop: "15px",
                width: "250px",
                borderRadius: "10px",
              }}
            />
            <TextField
              id="month"
              select
              defaultValue="Any Month"
              size="small"
              endAdornment={<IoSearchOutline />}
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginTop: "15px",
                marginLeft: "20px",
                width: "250px",
                borderRadius: "10px",
              }}>
              {menuItemsData.month.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="sort_by"
              select
              defaultValue="date"
              size="small"
              endAdornment={<IoSearchOutline />}
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginTop: "15px",
                marginLeft: "20px",
                width: "250px",
                borderRadius: "10px",
                border: "none",
              }}>
              {menuItemsData.sort_by.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="search"
              sx={{
                backgroundColor: "red",
                marginTop: "20px",
                marginLeft: "20px",
                borderRadius: "10px",
                width: "250px",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1EC6B6",
                  boxShadow: "none",
                },
              }}>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "20px",
              marginLeft: "0",
              display: isBoxVisible ? "block" : "none",
            }}>
            <TextField
              id="month"
              select
              defaultValue="all"
              size="small"
              endAdornment={<IoSearchOutline />}
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginTop: "15px",
                marginLeft: "20px",
                width: "250px",
                borderRadius: "10px",
              }}>
              {menuItemsData.tourcat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="month"
              select
              defaultValue="any"
              size="small"
              endAdornment={<IoSearchOutline />}
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginTop: "15px",
                marginLeft: "20px",
                width: "250px",
                borderRadius: "10px",
              }}>
              {menuItemsData.destination_id.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <OutlinedInput
              id="sort_by"
              placeholder="Max budget ex. 500"
              size="small"
              endAdornment=<BsCurrencyDollar />
              sx={{
                backgroundColor: "white",
                outline: "none",
                marginTop: "15px",
                marginLeft: "20px",
                width: "250px",
                borderRadius: "10px",
                border: "none",
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="text"
          onClick={toggleBoxVisibility}
          sx={{
            marginTop: "30px",
            marginLeft: "-838px",
            width: "25ch",
            color: "white",
            fontSize: "10px",
          }}>
          {isBoxVisible ? <FaAngleUp /> : <FaAngleDown />}
          Advanced Search
        </Button>
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "15px",
            right: "15px",
            padding: "10px",
            borderRadius: "50%",
            background: "#1EC6B6",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: isVisible ? "block" : "none",
          }}>
          <FaAngleUp />
        </button>
      </div>
    </div>
  );
}

export default Header;
