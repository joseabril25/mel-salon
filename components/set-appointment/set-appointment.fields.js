const fields = [
  {
    id: 0,
    type: 'date',
    label: 'Appointment*',
    name: 'appointment',
    placeholder: 'Appointment',
    validation: {
      required: {
        value: true,
        message: 'Appointment is required',
      },
    },
  },
]
export const defaultValues = {
    appointment: '',
};

export default fields;