import { Grid, Typography } from "@mui/material";
import React from "react";
import menuItemsData from "../data/itemmenu.json";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "40px 90px", margin: "auto" }}>
        {menuItemsData.Popular_img.map((image) => (
          <Grid
            item
            key={image.id}
            xs={12}
            sm={6}
            md={3}
            position="relative"
            className="hover-image"
            sx={{ padding: "0 20px" }}>
            <Link to="#" className="no-underline">
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  minHeight: "300px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="caption"
                color="white"
                style={{
                  position: "absolute",
                  bottom: "17px",
                  left: "20px",
                  padding: "8px",
                  fontSize: "24px",
                }}>
                {image.text}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Popular;
