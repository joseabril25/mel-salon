import React from 'react';
import { useForm } from 'react-hook-form';
import fields, { singleFields, tripleFields, doubleFields, defaultValues } from './location-form.fields'

const Location = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {

    }

    const renderFields = fields.map((field) => (
      <div key={field.id} className="col-lg-6 col-md-6">
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

    const renderDoubleFields = doubleFields.map((field) => (
      <div key={field.id} className="col-lg-6 col-md-6">
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

    const renderSingleFields = singleFields.map((field) => (
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
    ))

    const renderTripleFields = tripleFields.map((field) => (
      <div key={field.id} className="col-lg-4 col-md-6">
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
    ))

    return (
        <div className='container registrater-container'>
            <form className='registration-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {renderFields}
                </div>
                <div className="row">
                    {renderTripleFields}
                </div>
                <div className="row">
                    {renderSingleFields}
                </div>
                <div className="row">
                    {renderDoubleFields}
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

export default Location;