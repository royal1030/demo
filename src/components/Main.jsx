import React from "react";
import Cards from "./Cards";
import { Box, Grid } from "@mui/material";

const Main = () => {
  return (
    <>
      <Grid container spacing={4}>
        {[...Array(6)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <div className="p-2 m-2 w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
              <Cards />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Main;

// import React from "react";
// import { Grid } from "@mui/material";
// import Cards from "./Cards";

// const GridComponent = () => {
//   return (
//     <Grid container spacing={4}>
//       {[...Array(6)].map((_, index) => (
//         <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
//           <div className="p-2 m-2 w-full h-screen bg-[#c9cbbe] flex items-center justify-center">
//             <Cards />
//           </div>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default GridComponent;
