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
    for (let pieceOfState of Object.keys(state)) {
        let url = BASE_URI + state[pieceOfState];
        if(typeof state[pieceOfState] !== "string") {
            url = BASE_URI + state[pieceOfState].url;
            if (url.length > 4 && url.substring(0, 4) === "http") {
                url = state[pieceOfState].url;
            }
            if(state[pieceOfState].headers) {
                request.headers = state[pieceOfState].headers;
            }
        } else {
            // API endpoints that start with http ignore BASE_URI and the request options
            // TODO: they can bring their own request options in from the route entry state property
            if (state[pieceOfState].length > 4 && state[pieceOfState].substring(0, 4) === "http") {
                url = state[pieceOfState];
            }
        }
        console.log("request URL: " + url);
        promises.push(
            fetch(url, request)
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
