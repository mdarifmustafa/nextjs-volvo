interface DescriptiveProps {
  type: string;
  model: string;
  variant: string;
  imageUrl: string;
  learn: string;
  shop: string;
}

interface Descriptives {
  models: DescriptiveProps[]
}

type DescriptivesType = Descriptives

export { DescriptiveProps, DescriptivesType }
