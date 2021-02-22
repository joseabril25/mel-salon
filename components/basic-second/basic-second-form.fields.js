const fields = [
    {
      id: 0,
      type: 'text',
      label: 'FirstName*',
      name: 'firstName',
      placeholder: 'First Name',
      validation: {
        required: {
          value: true,
          message: 'First Name Name is required',
        },
      },
    },
    {
      id: 1,
      type: 'text',
      label: 'LastName*',
      name: 'lastName',
      placeholder: 'Last Name',
      validation: {
        required: {
          value: true,
          message: 'Last Name Name is required',
        },
      },
    },
]

export const doubleFields = [
  {
    id: 0,
    type: 'select',
    label: 'Gender*',
    name: 'gender',
    placeholder: 'Gender',
    optionField: ['Male', 'Female'],
    validation: {
      required: {
        value: true,
        message: 'Gender is required',
      },
    },
  },
  {
    id: 1,
    type: 'date',
    label: 'Birth*',
    name: 'dob',
    placeholder: 'Date of Birth',
    validation: {
      required: {
        value: true,
        message: 'Date of Birth is required',
      },
    },
  },
]

export const tripleFields = [
  {
    id: 0,
    type: 'select',
    label: 'Civil*',
    name: 'civil',
    placeholder: 'Civil Status',
    optionField: ['Single', 'Married', 'Divorced', 'Separated', 'Widowed'],
    validation: {
      required: {
        value: true,
        message: 'Civil Status is required',
      },
    },
  },
  {
    id: 1,
    type: 'text',
    label: 'Nationality*',
    name: 'nationality',
    placeholder: 'Nationality',
    validation: {
      required: {
        value: true,
        message: 'Nationality is required',
      },
    },
  },
  {
    id: 2,
    type: 'text',
    label: 'Religion*',
    name: 'religion',
    placeholder: 'Religion',
    validation: {
      required: {
        value: true,
        message: 'Religion is required',
      },
    },
  },
]
export const defaultValues = {
  firstName: '',
  lastName: '',
  gender: '',
  dob: '',
  civil: '',
  nationality: '',
  religion: '',
};

export default fields;