const fields = [
  {
    id: 0,
    type: 'checkbox',
    label: 'Familiarity*',
    name: 'familiarity',
    placeholder: "Which of these factors are important to you when you make a decision about purchasing a certain brand?",
    options: [
      'Familiarity With The Brand',
      'Price',
      'Comfort',
      'Materials',
      'Customer Service',
      'Convenience',
      'Durability',
      'Others'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
]
export const defaultValues = {
  familiarity: '',
};

export default fields;