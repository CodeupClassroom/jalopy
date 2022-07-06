import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

let imageNumber = 1;

export default function Home(props) {
    return `
        <header>
            <h1 class="text-center">Hello Jalopy</h1>
        </header>
        <main>
            <div>
                <div id="img-container">
                    <img id="jalopy-img" src="${INTELLIJ_PROJECT_PATH}assets/jalopy1.jpeg" alt="jalopy" />
                </div>
                <p>
                    Welcome to my Jalopy application! 
                </p>
                <button id="img-button">Change image</button>    
            </div>
        </main>
    `;
}

function changeImage() {
    const img = document.querySelector("#jalopy-img");
    img.setAttribute("src", `${INTELLIJ_PROJECT_PATH}assets/jalopy${imageNumber}.jpeg`);
    imageNumber++;
    if(imageNumber > 3) {
        imageNumber = 1;
    }
}

export function HomeEvents() {
    document.querySelector("#img-button").addEventListener("click", changeImage);
}