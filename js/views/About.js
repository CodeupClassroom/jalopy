import {showNotification} from "../messaging.js";

export default function About(props) {
    // language=HTML
    return `
<header>
    <h1>About Page</h1>
</header>
<main>
    <div>
        <p>About page is here.</p>  
    </div>
</main>
    `;
}
export function AboutEvents() {
    showNotification("Hey, a message!", "danger");
}