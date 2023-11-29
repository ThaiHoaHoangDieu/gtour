import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import menuItemsData from "../data/itemmenu.json";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BestTrip() {
  return (
    <div>
      <Grid container spacing={3} sx={{ padding: "40px 90px", margin: "auto" }}>
        {menuItemsData.tour.map((post) => (
          <Grid
            item
            key={post.id}
            xs={12}
            sm={6}
            md={4}
            sx={{
              "&:hover": {
                boxShadow: "10px 10px #4444",
                transform: "translateY(-10px)",
              },
            }}>
            <Link to="#" className="no-underline">
              <Card>
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={post.src}
                    alt={post.alt}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Box>
                    <Typography className="postprice">${post.price}</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      letterSpacing: 0,
                      lineHeight: "1,4rem",
                      fontSize: "20px",
                    }}>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      paddingTop: "0.7em",
                      paddingBottom: "1.3em",
                      fontWeight: "300",
                      letterSpacing: 0,
                      lineHeight: "1,3rem",
                      fontSize: "14px",
                    }}>
                    {post.content}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Stack spacing={1} direction="row" alignItems="center">
                        <Rating
                          name="size-medium"
                          defaultValue={4}
                          size="small"
                        />
                        {post.start}
                        <Typography variant="body2" color="textSecondary">
                          Reviews
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={6}>
                      <Stack
                        spacing={1}
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end">
                        <Typography variant="body2" color="textSecondary">
                          <FaRegClock /> {post.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          marginLeft={1}>
                          Days
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BestTrip;
