import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import fields, { defaultValues } from './apply-form.fields'

const ApplyForm = ({ isLoading }) => {
const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {

    }

    const renderFields = fields.map((field) => (
        <div key={field.id} className="col-lg-12 col-md-6">
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
            <form className='apply-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                        <div className="col-lg-12 col-md-6">
                            <div className='contact-form_group'>
                            <textarea
                                ref={register({ required: false })}
                                name="message"
                                placeholder="Delivery Address"></textarea>
                            </div>
                        </div>
                        {renderFields}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <button type="submit">
                            {/* {isLoading && <div className={styles.spinner} />} */}
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default connect(null)(ApplyForm);