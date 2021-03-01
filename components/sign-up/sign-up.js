import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import fields, { defaultValues } from './sign-up.fields'
import { handleRegister } from '../../store/actions/register.actions';

const SignUp = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(({ auth }) => auth.loginError);
    const isLoading = useSelector(({ auth }) => auth.isLoginLoading);
    const { register, handleSubmit, errors } = useForm({
        mode: 'onSubmit',
        defaultValues: defaultValues
    });

    const onSubmit = (data) => {
        dispatch(handleRegister(data));
    }

    const renderFields = fields.map((field) => (
        <div key={field.id} className="col-lg-12 col-md-6">
          <div className='contact-form_group'>
            <input
              className={errors[field.name] && 'input-error'}
              ref={register(field.validation)}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <span className='contact-form_group-error'>{errors[field.name].message}</span>
            )}
          </div>
        </div>
    ));
    
    return (
        <div className='container contact-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row text-center">
                    {renderFields}
                    {loginError ? <span className='contact-form_group-error'>{loginError}</span> : <></>}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <button type="submit">
                            {/* {<div className={styles.spinner} />} */}
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default SignUp;