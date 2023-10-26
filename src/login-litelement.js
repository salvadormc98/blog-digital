import { LitElement, html, css } from 'lit-element';

export class LoginLitelement extends LitElement {

    static get styles() {
        return css`
            .container {
                border: solid 3px #FFC300;
                border-radius: 10px;
                width: 350px;
                height: 400px;
                text-align: center;
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 8vh;
                border: solid 1px #414141; 
                border-radius: 5px;
            }

            button {
                width: 60%;
                height: 40px;
                background: #FFD95E;
                color: #414141;
                border: none;
                border-radius: 6px;
                margin-top: 8vh;
            }

            button:hover {
                background: #FFC300;
                cursor: pointer;
            }
        `;
    }

    render() {
        return html`
            <div class="container">
                <h2>Ingrese sus datos</h2>
                <input id="email" type="email" placeholder="Usuario o Correo">
                <input id="password" type="password" placeholder="Contraseña">

                <button @click="${this._login}">Ingresar</button>
            </div>
        `;
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;

        if(!!email && !!pass) {
            this.dispatchEvent(new CustomEvent('signin', {
                detail: { login: true },
                bubbles: true, composed: true
            }));
        }
    }
}

customElements.define('login-litelement', LoginLitelement);