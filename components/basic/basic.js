import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleApplyPages } from '../../store/actions/register.actions';
import fields, { defaultValues } from './basic-form.fields'

const Basic = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
      dispatch(toggleApplyPages({type: 'basic', data, page: 2}))
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
        <div className='container register-container'>
            <form className='registration-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {renderFields}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <button type="submit" className="register-buttons">
                            {/* {isLoading && <div className={styles.spinner} />} */}
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default Basic;