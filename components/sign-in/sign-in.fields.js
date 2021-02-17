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
        id: 0,
        type: 'password',
        label: 'Password*',
        name: 'Password',
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
    password: '',
};

export default fields;