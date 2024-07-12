function castTo<CastType>(value: unknown): CastType {
  return value as CastType;
}

export default castTo;