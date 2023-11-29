import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import menuItemsData from "../data/itemmenu.json";

function ChooseUs() {
  return (
    <div>
      <Grid container spacing={3} sx={{ padding: "40px 90px", margin: "auto" }}>
        {menuItemsData.us.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", alignItems: "center" }}>
              <img
                src={post.src}
                alt={post.alt}
                style={{ width: "150px", height: "150px" }}
              />
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
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ChooseUs;
