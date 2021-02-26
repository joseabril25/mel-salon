import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import fields, { defaultValues } from './sign-in.fields'
import { authLogin } from '../../store/actions/auth.actions';

const SignIn = ({ isLoading }) => {
    const dispatch = useDispatch();
    const loginError = useSelector(({ auth }) => auth.loginError);
    const { register, handleSubmit, errors, reset } = useForm({
        mode: 'onSubmit',
        defaultValues: defaultValues
    });

    const onSubmit = (data) => {
        dispatch(authLogin(data));
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
            <img src={require("../../static/images/header-images/logo-2.png")} className="login-logo" data-wow-delay="0.5s" alt="image" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row text-center">
                    {renderFields}
                    {loginError ? <span className='contact-form_group-error'>{loginError}</span> : <></>}
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
            <div className="row divider-row">
                <div className="col-lg-12 col-md-6">
                    <h5 className='divider'>Don't have an account yet? 
                        <Link href="/registration">
                                <a > Sign Up For Free</a>
                        </Link>
                    </h5>
                    
                </div>
            </div>
        </div>
  );
}

export default SignIn;