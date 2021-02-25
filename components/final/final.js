import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { toggleApplyPages } from '../../store/actions/register.actions';
import boxContent from './box-content'

const Final = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = () => {
        dispatch(toggleApplyPages(2))
    }

    
    return (
      <div className='container register-container final-container'>
        <div className="row final-choices">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="text-white">Choose your next course of action below and take the first step to your Yehey! Journey!</h5>
          </div>
        </div>
        <div className="row solutions-box-area">
          {
            boxContent.map(box =>
                <div className={`col-lg-4 col-sm-12 col-md-6 solutions-boxes`}>
                    <div className={`final-solutions-box-${box.id}`}>
                        <Link href={`/${box.link}`}>
                            <a className="btn btn-secondary solutions-button">{box.buttonText}</a>
                        </Link>
                    </div>
                </div>
            )
          }
        </div>
      </div>
  );
}

export default Final;