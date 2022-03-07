const clamp = (prefer: number, min: number, max: number) => Math.min(
  Math.max(min, prefer),
  max,
);

export default clamp;
