const fields = [
  {
    id: 0,
    type: 'checkbox',
    label: 'Household*',
    name: 'household',
    placeholder: 'How many people are currently in your household?',
    options: ['0', '1', '2', '3', '4', '5 or more'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 1,
    type: 'checkbox',
    label: 'Children*',
    name: 'children',
    placeholder: 'How many children do you have?',
    options: ['0', '1', '2', '3', '4', '5 or more'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
]
export const defaultValues = {
  household: '',
  children: '',
};

export default fields;