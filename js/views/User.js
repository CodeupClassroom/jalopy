import createView from "../createView.js";

const BASE_URI = `${BACKEND_HOST}/api/users`;

export default function UserIndex(props) {
    console.log(props);
    // language=HTML
    return `
        <header>
            <h1>Your Page</h1>
        </header>
        <main>
            <img src="${props.users.photourl}">

            <form id="register-form">
                <label for="username">Username</label>
                <input disabled id="username" name="username" value="${props.users.username}" type="text"/><br>
                <label for="email">Email</label>
                <input disabled id="email" name="email" type="email" value="${props.users.email}"><br>
                <label for="new-password">New Password</label>
                <input id="new-password" name="new-password" type="password" value="this is not your real password"/><br>
                <button id="change-password-button" type="button">Change Password</button>
            </form>
        </main>
    `;
}

export function UserEvents() {
    $("#change-password-button").click(function() {
        const id = 1; // $("#add-post-id").val();
        let uriExtra = '/1/updatePassword';
        const newPassword = $("#new-password").val()

        const request = {
            method: "PUT"
        }
        fetch(`${BASE_URI}${uriExtra}?newPassword=${newPassword}`, request)
            .then(res => {
                console.log(`${request.method} SUCCESS: ${res.status}`);
            }).catch(error => {
            console.log(`${request.method} ERROR: ${error}`);
        }).finally(() => {
            createView("/users");
        });

    });
}