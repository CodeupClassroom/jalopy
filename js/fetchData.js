// import {BACKEND_HOST, BACKEND_PORT} from "./config.js";

/**
 * Given an object containing all the required data for a given page, fetch all the needed data and return it as properties to pass to a view.
 * @param state
 * @param request
 * @returns {Promise<{}>}
 */
const BASE_URI = `${BACKEND_HOST}`;

export default function fetchData(state, request) {
    const promises = [];
    //TODO: this needs to be moved to a prop file or env variable

    console.log("got to fetch data");
    console.log(request);
    for (let pieceOfState of Object.keys(state)) {
        console.log(BASE_URI + state[pieceOfState]);
        promises.push(
            fetch(BASE_URI + state[pieceOfState], request)
                .then(function (res) {
                    return res.json();
                }));
    }
    return Promise.all(promises).then(propsData => {
        const props = {};
        Object.keys(state).forEach((key, index) => {
            props[key] = propsData[index];
        });
        return props;
    });
}
