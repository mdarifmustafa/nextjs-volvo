"use client";

import { getDescriptives } from "@/api/Home/index"
import { DescriptiveProps, DescriptivesType } from "@/app/types/globals"
import { Box, Grid } from "@mui/material"
import { FC, memo, useEffect, useState } from "react"
import Descriptive from "../organisms/Descriptive"

const HomePage: FC = () => {
  const [models, setModels] = useState<DescriptiveProps[]>();

  const fetchDescriptives = async () => {
    const data = (await getDescriptives()) as DescriptivesType;
    console.log("data is:", data);
    setModels(data.models);
  };

  useEffect(() => {
    fetchDescriptives();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} className="relative my-16 ps-4 md:ps-6">
        {models &&
          models?.map((model, index) => {
            return <Descriptive key={index} {...model} />;
          })}
      </Grid>
    </Box>
  );
};

export default memo(HomePage);
