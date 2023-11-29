import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { RiMapPin5Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import menuItemsData from "../data/itemmenu.json";
import { Link } from "react-router-dom";

function Footer() {
  // eslint-disable-next-line
  return (
    <div className="footer">
      <Grid
        container
        spacing={3}
        sx={{
          padding: "40px 90px",
          margin: "auto",
          borderBottom: "1px solid #ccc",
        }}>
        <Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              letterSpacing: 0,
              lineHeight: "1,4rem",
              fontSize: "20px",
              color: "#fff",
            }}>
            Our Awards
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "500",
              letterSpacing: 0,
              lineHeight: "1,4rem",
              fontSize: "16px",
              color: "#ccc",
            }}>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </Typography>
          {/*eslint-disable-next-line*/}
          <img
            src={"images/logo.png"}
            style={{ width: "auto", height: "113px", paddingTop: "50px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              letterSpacing: 0,
              lineHeight: "1,4rem",
              fontSize: "20px",
              marginBottom: "20px",
              color: "#fff",
            }}>
            Contact Info
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  letterSpacing: 0,
                  lineHeight: "1.4rem",
                  marginBottom: "15px",
                  fontSize: "16px",
                  color: "#ccc",
                }}>
                <MdOutlineSmartphone /> 1-567-124-44227
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  letterSpacing: 0,
                  lineHeight: "1.4rem",
                  marginBottom: "15px",
                  fontSize: "16px",
                  color: "#ccc",
                }}>
                <RiMapPin5Line /> 184 Main Street East Perl Habour 8007
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  letterSpacing: 0,
                  lineHeight: "1.4rem",
                  marginBottom: "15px",
                  fontSize: "16px",
                  color: "#ccc",
                }}>
                <GoClock /> Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link to="#">
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "500",
                    letterSpacing: 0,
                    lineHeight: "1.4rem",
                    marginBottom: "15px",
                  }}>
                  {/*eslint-disable-next-line*/}
                  <img
                    src={"images/2023_Facebook_icon.svg.webp"}
                    style={{ width: "30px", height: "30px", paddingTop: "5px" }}
                  />
                </Typography>
              </Link>
              <Link to="#">
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "500",
                    letterSpacing: 0,
                    lineHeight: "1.4rem",
                    marginBottom: "15px",
                  }}>
                  {/*eslint-disable-next-line*/}
                  <img
                    src={"images/logotwitter.png"}
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                    }}
                  />
                </Typography>
              </Link>
              <Link to="#">
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "500",
                    letterSpacing: 0,
                    lineHeight: "1.4rem",
                    marginBottom: "15px",
                  }}>
                  {/*eslint-disable-next-line*/}
                  <img
                    src={"images/logoyoutube.png"}
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      backgroundColor: "transparent",
                    }}
                  />
                </Typography>
              </Link>
              <Link to="#">
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "500",
                    letterSpacing: 0,
                    lineHeight: "1.4rem",
                    marginBottom: "15px",
                  }}>
                  {/*eslint-disable-next-line*/}
                  <img
                    src={"images/instagram-colourful-icon.webp"}
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      backgroundColor: "transparent",
                    }}
                  />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              letterSpacing: 0,
              lineHeight: "1,4rem",
              fontSize: "20px",
              color: "#fff",
            }}>
            Recent Trips
          </Typography>
          <ImageList
            sx={{ width: "auto", height: 350 }}
            cols={3}
            rowHeight={150}>
            {menuItemsData.fotter.map((item) => (
              <ImageListItem key={item.id} sx={{ width: 150, height: 150 }}>
                <img
                  srcSet={`${item.src}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?w=150&h=150&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "5px 70px",
          margin: "auto",
        }}>
        <Grid item xs={6} md={6}>
          <Typography
            variant="h4"
            sx={{
              float: "left",
              width: "50%",
              fontSize: "12px",
              fontWeight: 400,
              textAlign: "left",
              color: "#ccc",
            }}>
            © Copyright Grand Tour Theme Demo - Thai Hoa Hoang Dieu
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} sx={{ float: "right", textAlign: "right" }}>
          <Link to="#" className="no-underline">
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                letterSpacing: 0,
                lineHeight: "1.4rem",
                fontSize: "12px",
                color: "#ccc",
              }}>
              Home
            </Typography>
          </Link>
          <Link to="#" className="no-underline">
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                letterSpacing: 0,
                marginLeft: "20px",
                lineHeight: "1.4rem",
                fontSize: "12px",
                color: "#ccc",
              }}>
              Tours
            </Typography>
          </Link>
          <Link to="#" className="no-underline">
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                letterSpacing: 0,
                marginLeft: "20px",
                lineHeight: "1.4rem",
                fontSize: "12px",
                color: "#ccc",
              }}>
              Blogs
            </Typography>
          </Link>
          <Link to="#" className="no-underline">
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                letterSpacing: 0,
                marginLeft: "20px",
                lineHeight: "1.4rem",
                fontSize: "12px",
                color: "#ccc",
              }}>
              Purchase Theme
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
