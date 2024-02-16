import React, { Suspense, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { CircularProgress, Box } from "@mui/material";

export default function Animation() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box>
      <Suspense fallback={<CircularProgress />}>
        <Spline
          onLoad={() => setLoaded(true)}
          scene="https://prod.spline.design/QZ4ohwGm3LiPT6bL/scene.splinecode"
        />
      </Suspense>
    </Box>
  );
}
