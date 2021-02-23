const fields = [
  {
    id: 0,
    type: 'radio',
    label: 'Household*',
    name: 'household',
    placeholder: 'How many of your children are below 18 years of age?',
    options: ['0', '1', '2', '3', '4', '5 or more'],
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
    label: 'Children*',
    name: 'children',
    placeholder: 'How many children do you have?',
    options: ['2020', '2019', '2018', '2017', '2016', '2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','N/A'],
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
};

export default fields;