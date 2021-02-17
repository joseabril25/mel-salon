const fields = [
    {
        id: 0,
        type: 'text',
        label: 'Contact*',
        name: 'contact',
        placeholder: 'Contact Number',
        validation: {
          required: {
            value: true,
            message: 'Contact Number is required',
          },
        },
    },
]
export const defaultValues = {
  product: '',
  brand: '',
};

export default fields;