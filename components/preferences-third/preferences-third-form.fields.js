const fields = [
  {
    id: 0,
    type: 'radio',
    label: 'Income*',
    name: 'income',
    placeholder: "What's your estimated montly household income?",
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
  {
    id: 1,
    type: 'radio',
    label: 'Decision*',
    name: 'decision',
    placeholder: 'Are you the primary decision maker regarding purchasing for the family?',
    options: ['Yes','No'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 2,
    type: 'radio',
    label: 'Contribution*',
    name: 'contribution',
    placeholder: "How large is your contribution for the needs of the family?",
    options: [
      '0% - 19%',
      '20% - 39%',
      '40% - 59%',
      '60% - 79%',
      '80% - 100%',
    ],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
]
export const defaultValues = {
  income: '',
  decision: '',
  contribution: '',
};

export default fields;