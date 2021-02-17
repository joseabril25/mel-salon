import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import fields, { defaultValues } from './contact-us.fields'

const ContactUs = ({ isLoading }) => {
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
            <img src={require("../../static/images/modal-images/email-icon.png")} className="wow fadeInUp email-image" data-wow-delay="0.5s" alt="image" />
            <h1 className='signin-title'>DO YOU HAVE A YEHEY! MESSAGE FOR US?</h1>
            <div className="row contact-buttons">
                <div className="col-lg-12 col-md-6">
                    <h5 className="button-label">EMAIL US</h5>
                    <a href='mailto:yeheyphilippines@gmail.com' className='fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        yeheyphilippines@gmail.com
                    </a>
                </div>
            </div>
            <div className="row contact-buttons">
                <div className="col-lg-12 col-md-6">
                    <h5 className="button-label">FOLLOW US</h5>
                    <a href='mailto:yeheyphilippines@gmail.com' className='fb-login' >
                        {/* {isLoading && <div className={styles.spinner} />} */}
                        www.facebook.com/YeheyPH
                    </a>
                </div>
            </div>
        </div>
  );
}

export default connect(null)(ContactUs);