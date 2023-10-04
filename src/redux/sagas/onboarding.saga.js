import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//PETER: Deleted what I originally put here, but leaving this for now because we might need a client saga later anyways ?!?


function* updateServices(action) {
    // new client info here - sending PUT, no reducer needed

    try {
        const servicesObj = action.payload;
        console.log("client_id:", servicesObj.client_id)
        console.log("service_id array:", servicesObj.service_id)
        const response = yield axios.put('/api/onboarding/servicechoice', servicesObj)
        console.log(response.data)
    }
    catch (error) {
        console.log("error with PUT on client side", error)
    }
}

function* onboardingSaga() {
    yield takeLatest('UPDATE_SERVICES', updateServices)
}

export default onboardingSaga;