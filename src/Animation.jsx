import React, { Suspense, useState } from "react";
import { CircularProgress, Box } from "@mui/material";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Animation() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Suspense fallback={<CircularProgress sx={{ alignSelf: "center" }} />}>
        <Spline
          onLoad={() => setLoaded(true)}
          scene="https://prod.spline.design/QZ4ohwGm3LiPT6bL/scene.splinecode"
        />
      </Suspense>
    </Box>
  );
}
