const fields = [
  {
    id: 0,
    type: 'radio',
    label: 'Newslettter*',
    name: 'newsletter',
    placeholder: "Would you like to receive updates, emails, and other newsletters from Yehey! Philippines?",
    options: ['Yes','No'],
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
    label: 'Newslettter*',
    name: 'tandc',
    placeholder: "Privacy Terms & Conditions & Description",
    options: ["I have read and accept Yehey! Philippines' Terms & Conditions and the Privacy Policy "],
    validation: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
  },
]
export const defaultValues = {
  newsletter: '',
  tandc: '',
};

export default fields;