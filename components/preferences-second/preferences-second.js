import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleApplyPages } from '../../store/actions/register.actions';
import fields, { defaultValues } from './preferences-second-form.fields'

const PreferencesSecond = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm({
      mode: 'onSubmit',
      defaultValues
    });

    const onSubmit = (data) => {
        dispatch(toggleApplyPages({type: 'pref-second', data, page: 6}))
    }

    const renderFields = fields.map((field) => (
      <div key={field.id} className="col-lg-12 col-md-6">
        <div className='contact-form_group '>
          <h3>{field.placeholder}</h3>
          <div className="row preferences-choices">
            {field.options.map(option => 
              field.type === 'radio' ?
              <div className="col-lg-4 col-md-6">
                <label htmlFor="message" className="label-container">{option}
                  <input
                    className={errors[field.name] && 'input-error'}
                    ref={register(field.validation)}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              :
              <div className="col-lg-2 col-md-6">
                <label htmlFor="message" className="label-container">{option}
                  <input
                    className={errors[field.name] && 'input-error'}
                    ref={register(field.validation)}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  <span className="checkmark"></span>
                </label>
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
      <div className='register-container'>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className="row registration-form-preferences">
              {renderFields}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
                <button type="submit" className="preference-buttons">
                    {/* {isLoading && <div className={styles.spinner} />} */}
                    Next
                </button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default PreferencesSecond;