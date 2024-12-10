import * as yup from "yup";

export const productValidationSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  description: yup.string().required("Product description is required"),
  basePrice: yup
    .number()
    .typeError("Base price must be a number")
    .positive("Base price must be positive")
    .required("Base price is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .positive("Stock must be positive")
    .integer("Stock must be an integer")
    .required("Stock is required"),
  discount: yup
    .number()
    .typeError("Discount must be a number")
    .min(0, "Discount cannot be less than 0")
    .max(100, "Discount cannot exceed 100")
    .required("Discount is required"),
  discountType: yup.string().required("Discount type is required"),
  category: yup
    .array({
      value: yup.string(),
      label: yup.string(),
    })
    .required("Category is required"),
  sizes: yup.array().min(1, "At least one size must be selected"),
  gender: yup.string().required("Gender is required"),
  images: yup.array().min(1, "At least one image must be uploaded"),
});
