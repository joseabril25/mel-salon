import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleApplyPages } from '../../store/actions/register.actions';
import fields, { defaultValues } from './preferences-five.fields'

const PreferencesFive = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(({ register }) => register.isRegisterLoading);
    const isError = useSelector(({ register }) => register.regError);
    const { register, handleSubmit, errors, reset } = useForm({
      mode: 'onSubmit',
      defaultValues
    });

    const onSubmit = (data) => {
        dispatch(toggleApplyPages({type: 'pref-five', data, page: 9}))
    }

    const renderFields = fields.map((field) => (
      <div key={field.id} className="col-lg-12 col-md-6">
        <div className='contact-form_group '>
          <div className='preferences-fourth row'>
            <h3>{field.placeholder}</h3>
            {field.name === 'tandc' ?
              <h5>By ticking the box and clicking the submit button, I understand that my information will be used as described in the Terms and condtions and Privacy Policy. </h5>
              :
              <></>
            }
            <div className="row preferences-choices">
              {field.options.map(option => 
                <div className="col-lg-12 col-md-12">
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
            {errors[field.name]&& (
              <span className='contact-form_group-error'>{errors[field.name].message}</span>
            )}
            {isError && (
              <span className='contact-form_group-error'>{isError}</span>
            )}
          </div>
        </div>
      </div>
    ));
    
    return (
        <div className='register-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row registration-form-preferences-fourth">
                {renderFields}
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 text-center">
                  <button type="submit" className="preference-buttons">
                    {isLoading && <div className={styles.spinner} />}
                    Submit
                  </button>
              </div>
            </div>
          </form>
        </div>
  );
}

export default PreferencesFive;