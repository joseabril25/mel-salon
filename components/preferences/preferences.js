import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleApplyPages } from '../../store/actions/register.actions';
import fields, { defaultValues } from './preferences-form.fields'

const Preferences = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {
        dispatch(toggleApplyPages(2))
    }

    const renderFields = fields.map((field) => (
      <div key={field.id} className="col-lg-12 col-md-6">
        <div className='contact-form_group '>
          <h3>{field.placeholder}</h3>
          <div className="row">
            {field.options.map(option => 
              <div className="col-lg-4 col-md-6">
                <input
                  className={[errors[field.name] ? 'input-error' :  'custom-chekbox']}
                  ref={register(field.validation)}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                <label htmlFor="message">{option}</label>
              </div>
            )}
          </div>
          {errors[field.name] && (
            <span className='contact-form_group-error'>{errors[field.name].message}</span>
          )}
        </div>
      </div>
    ));
    
    return (
        <div className='container register-container'>
          <form className='registration-form-preferences' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {renderFields}
            </div>
          </form>
          <div className="row">
            <div className="col-lg-12 col-md-6">
                <button type="submit" className="preference-buttons">
                    {/* {isLoading && <div className={styles.spinner} />} */}
                    Next
                </button>
            </div>
          </div>
        </div>
  );
}

export default Preferences;