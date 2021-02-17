const fields = [
    {
        id: 0,
        type: 'text',
        label: 'Product*',
        name: 'product',
        placeholder: 'Product Name',
        validation: {
          required: {
            value: true,
            message: 'Product Name is required',
          },
        },
    },
    {
        id: 1,
        type: 'text',
        label: 'Brand*',
        name: 'brand',
        placeholder: 'Brand Name',
        validation: {
          required: {
            value: true,
            message: 'Brand Name is required',
          },
        },
    },
]
export const defaultValues = {
  product: '',
  brand: '',
};

export default fields;