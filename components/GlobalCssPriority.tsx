"use client";

import { StyledEngineProvider } from "@mui/material/styles"
import React from "react"

export default function GlobalCssPriority ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  )
}