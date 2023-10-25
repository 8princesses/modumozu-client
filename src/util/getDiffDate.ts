export const getDiffDate = (date: string) => {
  const base = new Date(date);
  const current = new Date();

  let diff = Math.abs(base.getTime() - current.getTime());
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return diff;
};
