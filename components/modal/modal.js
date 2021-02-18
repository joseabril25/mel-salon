import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from 'react-feather'
import { toggleModal } from '../../store/actions/app.actions';
import SignIn from '../sign-in';
import ContactUs from '../contact-us';

const ModalComp = ({ }) => {
  const dispatch = useDispatch();
  const modalType = useSelector(({ app }) => app.modalType);
  const isModal = useSelector(({ app }) => app.isModalOpen);

  const modalTypeF = useMemo(() => {
    if(isModal){
      switch (modalType) {
        case 'login':
          return <SignIn />
        case 'contact':
          return <ContactUs />
        default:
          break;
      }
    }
  }, [isModal, modalType])
  return (
    <div className='modal-wrapper'>
      <button className='modal-bg' onClick={() => dispatch(toggleModal({active: false, type: null}))} />
      <div className='modal-body'>
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