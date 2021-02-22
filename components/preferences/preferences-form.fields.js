const fields = [
  {
    id: 0,
    type: 'select',
    label: 'Household*',
    name: 'household',
    placeholder: 'How many people are currently in your household?',
    options: ['1', '3', '5', '10+'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 1,
    type: 'select',
    label: 'Children*',
    name: 'children',
    placeholder: 'How many children do you have?',
    options: ['0', '1', '2', '3', '4', '5', '6'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 2,
    type: 'select',
    label: 'IfChildren*',
    name: 'ifChildren',
    placeholder: '(If above was answered) How many of your children are below 18 years old?',
    options: ['0', '1', '2', '3', '4', '5', '6'],
    validation: {
      required: {
        value: false,
        message: 'This field is required',
      },
    },
  },
  {
    id: 3,
    type: 'select',
    label: 'IfBelow*',
    name: 'ifBelow',
    placeholder: '(If above was answered) What year were they born?',
    options: ['0', '1', '2', '3', '4', '5', '6'],
    validation: {
      required: {
        value: false,
        message: 'This field is required',
      },
    },
  },
  {
    id: 4,
    type: 'select',
    label: 'Income*',
    name: 'income',
    placeholder: 'Estimated Montly household income',
    options: ['10,000 Below', '10,000 Above', '15,000 Above', '30,000 Above', '50,000 Above', '100,000 Above', '150,000 Above'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 5,
    type: 'select',
    label: 'Primary*',
    name: 'primary',
    placeholder: 'Are you the primary decision maker regarding purchasing?',
    options: ['Yes','No'],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
  {
    id: 6,
    type: 'tel',
    label: 'Contribution*',
    name: 'contribution',
    placeholder: 'How much is your contribution to purchasing for the family?',
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
  ifChildren: '',
  ifBelow: '',
  income: '',
  primary: '',
  contribution: '',
};

export default fields;