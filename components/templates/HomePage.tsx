"use client";

import { getDescriptives } from "@/api/Home/index"
import { DescriptiveProps, DescriptivesType } from "@/app/types/globals"
import { theme } from "@/app/utils/mui-theme-config"
import { Container } from "@mui/material"
import { FC, memo, useEffect, useState } from "react"
import Carousel from "react-carousel-mui"
import Depictive from "../organisms/Depictive"

const HomePage: FC = () => {
  const [models, setModels] = useState<DescriptiveProps[]>();

  const fetchDescriptives = async () => {
    const data = (await getDescriptives()) as DescriptivesType;
    setModels(data.models);
  };

  useEffect(() => {
    fetchDescriptives();
  }, []);

  return (
    <Container
      className="my-16 ps-4 md:ps-6"
      maxWidth={"xl"}
    >
      {models && models?.length > 0 && (
        <Carousel
          items={models}
          itemsPerPage={{
            xs: 1,
            sm: 1,
            tablet: 2,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          itemRenderer={(model) => <Depictive key={model.learn} {...model} />}
          maxContainerWidth={theme.breakpoints.values["xl"]} 
          itemGap={30}
        />
      )}
    </Container>
  );
};

export default memo(HomePage);
