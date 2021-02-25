import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import fields, { defaultValues } from './suggest-form.fields'

const SuggestForm = ({ isLoading }) => {
const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {

    }

    const renderFields = fields.map((field) => (
        <div key={field.id} className="col-lg-8 col-md-12">
          <div className='contact-form_group '>
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
            <form className='suggest-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                        {renderFields}
                        <div className="col-lg-8 col-md-12">
                            <div className='contact-form_group'>
                            <textarea
                                ref={register({ required: false })}
                                name="message"
                                placeholder="Short Description and Reason Why You Are Suggesting The Product"></textarea>
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <button type="submit" className="blue-submit">
                            {/* {isLoading && <div className={styles.spinner} />} */}
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default connect(null)(SuggestForm);