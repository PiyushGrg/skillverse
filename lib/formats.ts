export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

export const getPublicIdFromCloudinaryURL = (url: string) => {
  
  const parts = url.split('/');

  const publicIdWithExtension = parts[parts.length - 1];

  const publicId = publicIdWithExtension.split('.')[0];

  return publicId;
};
