"use client";

import { Box, Typography } from "@mui/material"
import React, { PureComponent, ReactNode } from "react"

interface ErrorBoundaryState {
  error: string | Error | ReactNode;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  retryButtonText?: string;
  errorCallback?: () => void;
}

class ErrorBoudary extends PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { error: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo.componentStack);
    this.setState({ error });
  }

  retryButtonClickHandler(): void {
    const { errorCallback } = this.props;

    if (errorCallback) {
      errorCallback();
    }

    this.setState({ error: "" });
  }

  render(): ReactNode {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <Box className="flex flex-col justify-center items-center bg-white w-full h-auto">
          <Box
            component="section"
            sx={{
              display: "grid",
              placeItems: "center",
              zIndex: 500,
            }}
          >
            Oops!
          </Box>

          <Typography variant={"subtitle2"}>
            Oops...we have encouter an internal server error.
          </Typography>
        </Box>
      );
    }

    return children;
  }
}

export default ErrorBoudary;
