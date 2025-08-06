const isValid = (val) => {
  return val !== undefined && val !== null && typeof val === 'number' && val >= 0;
}


export function sort(width, height, length, mass) {
  if(![width, height, length, mass].every(isValid)) return "REJECTED";

  const volume = width * height * length;
  const isBulky = volume > 1_000_000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";
  if (isBulky || isHeavy) return "SPECIAL";
  return "STANDARD";
}
 