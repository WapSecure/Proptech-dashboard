export const formatCurrency = (
  value: number,
  options?: {
    withDecimals?: boolean;
    compact?: boolean;
  }
): string => {
  const { withDecimals = true, compact = false } = options || {};

  if (compact && value >= 1_000_000) {
    return `₦${(value / 1_000_000).toFixed(1)}M`;
  }

  if (compact && value >= 1_000) {
    return `₦${(value / 1_000).toFixed(1)}k`;
  }

  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: withDecimals ? 2 : 0,
  }).format(value);
};