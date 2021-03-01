import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { toggleModal } from '../../store/actions/app.actions';
import SignIn from '../sign-in';
import SignUp from '../sign-up';
import SetAppointment from '../set-appointment';

const ModalComp = ({ }) => {
  const dispatch = useDispatch();
  const modalType = useSelector(({ app }) => app.modalType);
  const isModal = useSelector(({ app }) => app.isModalOpen);

  const modalTypeF = useMemo(() => {
    if(isModal){
      switch (modalType) {
        case 'login':
          return <SignIn />
        case 'sign-up':
          return <SignUp />
        case 'appointment':
          return <SetAppointment />
        default:
          break;
      }
    }
  }, [isModal, modalType])

  const background = useMemo(() => {
    if(isModal){
      switch (modalType) {
        case 'login':
          return 'modal-body'
        case 'sign-up':
          return 'modal-body'
        case 'appointment':
          return 'modal-body'
        default:
          return 'modal-body';
      }
    }
  },[isModal, modalType])
  
  return (
    <div className='modal-wrapper'>
      <button className='modal-bg' onClick={() => dispatch(toggleModal({active: false, type: null}))} />
      <div className={background}>
        <button className='btn_close' onClick={() => dispatch(toggleModal({active: false, type: null}))}>
          <Icon.X />
        </button>
        <div className='modal-content'>
          {modalTypeF}
        </div>
      </div>
    </div>
  );
}

export default ModalComp