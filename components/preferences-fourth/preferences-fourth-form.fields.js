const fields = [
  {
    id: 0,
    type: 'radio',
    label: 'Purchasing*',
    name: 'purchasing',
    placeholder: "Which of these factors are important to you when you make a decision about purchasing a certain brand?",
    options: [
      'Under ₱10,000',
      '₱10,000 - ₱29,999',
      '₱30,000 - ₱69,999',
      '₱70,000 - ₱139,999',
      '₱140,000 - ₱249,999',
      '₱250,000 - ₱499,999',
      'More than ₱500,000',
      'I prefer not to answer'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
]
export const defaultValues = {
  purchasing: '',
};

export default fields;