import { DescriptiveProps } from "@/app/types/globals"
import styled from '@emotion/styled'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { Box, Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
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

const Descriptive: FC<DescriptiveProps> = ({
  type,
  model,
  variant,
  imageUrl,
  learn,
  shop,
}) => {
  return (
    <Grid
      item
      xs={11}
      sm={10}
      md={7}
      lg={5}
      xl={4}
      className="relative flex flex-col items-start"
      sx={{
        minHeight: {
          xs: "16rem",
          sm: "16rem",
          md: "17rem",
          lg: "18rem",
          xl: "19rem"
        },
      }}
    >
      <Typography variant="h6" color="grey.600" className="mb-1.5">{type}</Typography>
      <Box className="w-full mb-3 flex flex-col justify-start items-start sm:mb-4 sm:flex-row sm:justify-between">
        <Typography variant="h4" className="mb-1.5 font-bolder" color="text.primary">{model}</Typography>
        <Typography variant="h6" color="grey.600" className="font-light sm:mt-0.5">{variant}</Typography>
      </Box>
      <Box
        component="div"
        className="relative w-full"
        sx={{
          minHeight: {
            xs: "10rem",
            sm: "12rem",
            md: "14rem",
            lg: "17rem",
            xl: "18rem"
          },
        }}
      >
        <Image
          src={imageUrl}
          priority
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="volvo car"
        />
      </Box>
      <Box className="w-full flex flex-row justify-center items-center">
        <StyledLinkButton href={learn} className="me-3 sm:md-4 md:me-4 lg:me-5">
          <StyledButton variant="text" endIcon={<NavigateNextRoundedIcon />}>Learn</StyledButton>
        </StyledLinkButton>
        <StyledLinkButton href={shop}>
          <StyledButton variant="text" endIcon={<NavigateNextRoundedIcon />}>Shop</StyledButton>
        </StyledLinkButton>
      </Box>
    </Grid>
  );
};

export default memo(Descriptive);
