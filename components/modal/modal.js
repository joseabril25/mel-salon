import React from 'react';
import { useDispatch } from 'react-redux';
import * as Icon from 'react-feather'
import { toggleModal } from '../../store/actions/app.actions';
import SignIn from '../sign-in'
const ModalComp = ({ type }) => {
  const dispatch = useDispatch(false);

  return (
    <div className='modal-wrapper'>
      <button className='modal-bg' onClick={() => dispatch(toggleModal(false))} />
      <div className='modal-body'>
        <button className='btn_close' onClick={() => dispatch(toggleModal(false))}>
          <Icon.X />
        </button>
        <div className='modal-content'>
          <SignIn />
        </div>
        {/* <ContactForm title={form.title} subtitle={form.subtitle} buttonLabel={form.btnLabel} /> */}
      </div>
    </div>
  );
}

export default ModalComp