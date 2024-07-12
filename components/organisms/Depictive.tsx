"use client";

import { DescriptiveProps } from "@/app/types/globals"
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded"
import { Box, Button } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import { FC, memo } from "react"

const StyledButton = styled(Button)`
  font-weight: 900;
  &:hover {
    background-color: transparent;
  }
`;

const StyledLinkButton = styled(Link)`
  .MuiButtonBase-root {
    font-weight: 900;
    text-transform: uppercase;
  }
`;

const Depictive: FC<DescriptiveProps> = ({
  type,
  model,
  variant,
  imageUrl,
  learn,
  shop,
}) => {
  const title = () => {
    return (
      <Typography variant="body1" color="grey.600" className="mb-1.5">
        {type}
      </Typography>
    );
  };

  const subHeader = () => {
    return (
      <Box className="w-full mb-2 flex flex-col justify-start items-start sm:mb-4 sm:flex-row sm:justify-start sm:items-start">
        <Typography
          variant="h5"
          className="mb-1 font-bolder me-0 sm:me-1 flex items-center"
          color="text.primary"
        >
          {model}
        </Typography>
        <Typography
            variant="h5"
            color="grey.600"
            className="font-light sm:mb-1 sm:pb-1"
          >
            {variant}
          </Typography>
      </Box>
    );
  };

  const actions = () => {
    return (
      <Box className="w-full flex flex-row justify-center items-center">
        <StyledLinkButton href={learn} className="me-3 sm:md-4 md:me-4 lg:me-5">
          <StyledButton variant="text" endIcon={<NavigateNextRoundedIcon />}>
            Learn
          </StyledButton>
        </StyledLinkButton>
        <StyledLinkButton href={shop}>
          <StyledButton variant="text" endIcon={<NavigateNextRoundedIcon />}>
            Shop
          </StyledButton>
        </StyledLinkButton>
      </Box>
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }} elevation={0}>
      <CardHeader title={title()} subheader={subHeader()} className="px-0 pb-0" />
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Volvo"
        sx={{
          minHeight: { xs: "194px", sm: "225px", md: "250px", lg: "275px", xl: "300px" },
        }}
      />
      <CardActions disableSpacing>{actions()}</CardActions>
    </Card>
  );
};

export default memo(Depictive);
