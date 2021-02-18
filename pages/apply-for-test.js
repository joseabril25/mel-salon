import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainContainer from '../components/container';
import Apply from '../components/apply';
import ApplyConfirm from '../components/apply-confirm';
import ApplyFinish from '../components/apply-finish';
import { toggleApplyPages } from '../store/actions/apply.actions';
const Home = ({ }) => {
    const applyPage = useSelector(({ apply }) => apply.applyPage);

    const Content = () => {
        switch (applyPage) {
            case 1: 
                return <Apply />
            case 2: 
                return <ApplyConfirm />
            case 3: 
                return <ApplyFinish />
            default:
                break;
        }
    }
    return (
        <MainContainer>
            <Content />
        </MainContainer>
    )
}

export default Home;