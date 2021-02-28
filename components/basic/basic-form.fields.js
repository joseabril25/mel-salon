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
        id: 2,
        type: 'password',
        label: 'Password*',
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        validation: {
          required: {
            value: true,
            message: 'Confirm Password is required',
          },
        },
    },
    {
        id: 3,
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
    {
        id: 4,
        type: 'phone',
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
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
};

export default fields;