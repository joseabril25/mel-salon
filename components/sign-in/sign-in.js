import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import fields, { defaultValues } from './sign-in.fields'

const SignIn = ({ isLoading }) => {
const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {

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
            <h1 className='signin-title'>SIGN UP FOR FREE!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                        {renderFields}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <button type="submit">
                            {/* {isLoading && <div className={styles.spinner} />} */}
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <div className="row divider-row">
                <div className="col-lg-12 col-md-6">
                    <h5 className='divider'>or</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-6">
                    <button type="submit" className='fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        Login with Facebook
                    </button>
                </div>
            </div>
        </div>
  );
}

export default connect(null)(SignIn);