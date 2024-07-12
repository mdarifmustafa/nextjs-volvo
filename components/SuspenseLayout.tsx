"use client";

import { LinearProgress } from "@mui/material"
import { ReactNode, Suspense } from "react"
import ErrorBoudary from "./ErrorBoundary"

function SuspenseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <ErrorBoudary>{children}</ErrorBoudary>
    </Suspense>
  );
}

export default SuspenseLayout;
