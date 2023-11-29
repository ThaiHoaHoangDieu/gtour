import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import menuItemsData from "../data/itemmenu.json";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <Grid container spacing={3} sx={{ padding: "40px 90px", margin: "auto" }}>
        {menuItemsData.blogs.map((post) => (
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
                </Box>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {post.date}
                  </Typography>
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
                  <Button href="#text-buttons" sx={{ color: "#222222" }}>
                    Read More <FaChevronRight />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blog;
