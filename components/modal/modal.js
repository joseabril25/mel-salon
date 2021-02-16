import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { RemoveScroll } from 'react-remove-scroll';
import styles from './Modal.module.scss';
import ContactForm from '@/components/ContactForm';
import { toggleModal } from '@/redux/actions/appActions';

const cx = classnames(styles);

const Modal = ({ form }) => {
  const dispatch = useDispatch();

  return (
    <RemoveScroll
      className={cx('modal-wrapper', process.env.NEXT_PUBLIC_APP_ENV === 'staging' && 'staging')}>
      <button className={cx('modal-bg')} onClick={() => dispatch(toggleModal(false))} />
      <div className={cx('modal-body')}>
        <button className={cx('btn_close')} onClick={() => dispatch(toggleModal(false))}>
          <img src="/assets/svg/icon-close.svg" alt="close_icon" />
        </button>
        <ContactForm title={form.title} subtitle={form.subtitle} buttonLabel={form.btnLabel} />
      </div>
    </RemoveScroll>
  );
};

Modal.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    btnLabel: PropTypes.string,
  }),
};

Modal.defaultProps = {
  form: {
    title: 'Request a Callback',
    subtitle:
      'Send us a message and one of our friendly staff will be in touch as soon as possible.',
    btnLabel: 'Request a Callback',
  },
};

export default Modal;
