import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1>Hello Jalopy</h1>
        </header>
        <main>
            <div>
                <img src="assets/jalopy.jpeg" />
                <p>
                    
                </p>    
            </div>
        </main>
    `;
}

export function HomeEvents() {
}