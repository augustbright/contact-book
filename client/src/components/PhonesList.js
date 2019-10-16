import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import PhoneItem from "./PhoneItem";
import {connect} from 'react-redux';
import {selectPhones, selectPhonesStatus} from "../redux/selectors";
import {STATUS_LOADING} from "../redux/reducer/const";
import PhonesHeader from "./PhonesHeader";

const PhonesList = ({phones, status}) => {
    const spinner = (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );

    return (
        <>
            <PhonesHeader/>
            {status === STATUS_LOADING ? spinner : ''}
            <ListGroup className={status === STATUS_LOADING ? 'd-none' : ''}>
                {phones.map(phone => <PhoneItem key={phone._id} {...phone}/>)}
            </ListGroup>
        </>
    );
};

const mapStateToProps = state => ({
    phones: selectPhones(state),
    status: selectPhonesStatus(state)
});

export default connect(mapStateToProps)(PhonesList);
