"use client";

import { Box, LinearProgress } from "@mui/material"
import { ReactNode, Suspense } from "react"
import ErrorBoudary from "./ErrorBoundary"

function SuspenseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (<Suspense fallback={<LinearProgress />}>
    <ErrorBoudary>
      <Box component="main" className="w-full min-h-screen relative">
        {children}
      </Box>
    </ErrorBoudary>
  </Suspense>);
}

export default SuspenseLayout;
