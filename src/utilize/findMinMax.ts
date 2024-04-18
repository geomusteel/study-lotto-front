export const findMinMax = (
  data: [string, number][],
): { min: [string, number]; max: [string, number] } => {
  if (data.length === 0) {
    return { min: ['0', 0], max: ['0', 0] };
  }

  let min = data[0];
  let max = data[0];

  data.forEach((item) => {
    if (item[1] < min[1]) {
      min = item;
    }
    if (item[1] > max[1]) {
      max = item;
    }
  });

  return { min, max };
};
