import createView from "../createView.js";
import {getHeaders, getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/posts`;

export default function PostIndex(props) {
    console.log(props);

    // language=HTML
    return `
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
            <p>List of posts goes here</p>
        </main>
    `;
}

export function PostEvents() {
}
