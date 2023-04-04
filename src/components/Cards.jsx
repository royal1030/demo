import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { shadows } from "@mui/system";
import img from "../Images/smpleimg.jpg";

export default function Cards() {
  const [rotate, setrotate] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="p-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: 400 }}
      >
        {isHovered ? null : (
          <Box sx={{ boxShadow: 3 }}>
            <motion.div
              animate={{ scale: 1, rotate: rotate ? 360 : 0 }}
              transition={{ type: "tween", duration: 1.6 }}
              onClick={() => setrotate(!rotate)}
              // initial={{ scale: 0.7 }}
            >
              {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card> */}
              <Box sx={{ boxShadow: 3 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height={345}
                    image={img}
                    alt="Card image"
                  />
                </Card>
              </Box>
            </motion.div>
          </Box>
        )}

        {!isHovered ? null : (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )}
      </div>
    </>
  );
}
