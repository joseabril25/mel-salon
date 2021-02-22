const fields = [
  {
    id: 0,
    type: 'text',
    label: 'House*',
    name: 'houseNo',
    placeholder: 'House No.',
    validation: {
      required: {
        value: true,
        message: 'House Number is required',
      },
    },
  },
  {
    id: 1,
    type: 'text',
    label: 'Street*',
    name: 'street',
    placeholder: 'Street',
    validation: {
      required: {
        value: true,
        message: 'Street is required',
      },
    },
  },
]

export const tripleFields = [
  {
    id: 0,
    type: 'text',
    label: 'Barangay*',
    name: 'barangay',
    placeholder: 'Barangay',
    validation: {
      required: {
        value: true,
        message: 'Barangay is required',
      },
    },
  },
  {
    id: 1,
    type: 'text',
    label: 'City*',
    name: 'city',
    placeholder: 'City/Province',
    validation: {
      required: {
        value: true,
        message: 'City/Province is required',
      },
    },
  },
  {
    id: 2,
    type: 'text',
    label: 'Zip*',
    name: 'zip',
    placeholder: 'Zip Code',
    validation: {
      required: {
        value: true,
        message: 'Zip Code is required',
      },
    },
  },
]

export const singleFields = [
  {
    id: 0,
    type: 'text',
    label: 'Phone*',
    name: 'phone',
    placeholder: 'Phone Number',
    validation: {
      required: {
        value: true,
        message: 'Phone Number is required',
      },
    },
  },
  {
    id: 1,
    type: 'email',
    label: 'Email*',
    name: 'email',
    placeholder: 'Email Address',
    validation: {
      required: {
        value: true,
        message: 'Email Address is required',
      },
    },
  },
]

export const doubleFields = [
  {
    id: 0,
    type: 'password',
    label: 'Password*',
    name: 'password',
    placeholder: 'Password',
    validation: {
      required: {
        value: true,
        message: 'Password is required',
      },
    },
  },
  {
    id: 1,
    type: 'password',
    label: 'ConfirmPassword*',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    validation: {
      required: {
        value: true,
        message: 'Confirm Password is required',
      },
    },
  },
]

export const defaultValues = {
  houseNo: '',
  street: '',
  barangay: '',
  city: '',
  zip: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default fields;