import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleApplyPages } from '../../store/actions/apply.actions';
import list from './list';

const ApplyConfirm = ({ }) => {

    const dispatch = useDispatch();

    return (
        <div className="appcon-header-head">
            <div className="appcon-banner">
                <div className="container-fluid appcon-title-container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 appcon-title">
                            <h1>If I'm Selected to participate in the testing of this product, I agree to the following responsibilities that will entail:</h1>
                            <ul>
                                {
                                    list.map(l =>
                                        <li>
                                            <h5>{l}</h5>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 appcon-title">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 button-row">
                                    <button type="submit" className="blue-submit" onClick={() => dispatch(toggleApplyPages(3))}>
                                        {/* {isLoading && <div className={styles.spinner} />} */}
                                        Yes
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-6 button-row">
                                    <button type="submit" className="blue-submit" onClick={() => dispatch(toggleApplyPages(3))}>
                                        {/* {isLoading && <div className={styles.spinner} />} */}
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyConfirm;