export function formatData(count: number) {
  if (count > 999 && count < 9999) {
    return (count / 1000).toFixed(1) + "K";
  }
  if (count > 9999 && count < 999999) {
    return (count / 1000).toFixed(0) + "K";
  }
  if (count > 999999) {
    return (count / 1000000).toFixed(1) + "M";
  }
  return count;
}
