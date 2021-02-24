export enum ProductStatus {
  Pending = 1,
  Active,
  Blocked,
  Inactive
}

export function shouldDisplayProduct(p: ProductStatus): boolean {
  return ![ProductStatus.Pending, ProductStatus.Inactive].includes(p);
}