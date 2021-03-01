const fields = [
  {
    id: 0,
    type: 'text',
    label: 'Username*',
    name: 'username',
    placeholder: 'Username',
    validation: {
      required: {
        value: true,
        message: 'Username is required',
      },
    },
  },
  {
    id: 1,
    type: 'email',
    label: 'Email*',
    name: 'email',
    placeholder: 'Email',
    validation: {
      required: {
        value: true,
        message: 'Email is required',
      },
    },
  },
  {
    id: 1,
    type: 'tel',
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
  {
    id: 2,
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
]
export const defaultValues = {
    username: '',
    email: '',
    password: '',
};

export default fields;