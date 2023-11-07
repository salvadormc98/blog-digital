import { LitElement, html, css } from 'lit-element';

export class LoginLitelement extends LitElement {

    static get styles() {
        return css`
            .container {
                border: solid 3px #FFC300;
                border-radius: 10px;
                width: 350px;
                height: 470px;
                text-align: center;
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 8vh;
                border: solid 1px #414141; 
                border-radius: 5px;
            }

            .btn_enviar {
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
            .fbtn{

            }
            .ggbtn{

            }
            .img{
                width: 35px; height: auto; padding:2px;
            }

        `;
    }

    render() {
        return html`
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0" nonce="Ajlb0MZP"></script>
            <div class="container">
                <h2>Ingrese sus datos</h2>
                <input id="email" type="email" placeholder="Usuario o Correo">
                <input id="password" type="password" placeholder="Contraseña">
                <button class='btn_enviar' @click="${this._login}">Ingresar</button>
                <h4>Iniciar sesión con:</h4>
                    <button class="fbtn" onclick="location.href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAlAdQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S2080508850%3A1699383725172640&theme=glif'">
                        <img class="img" src='images/gg.png'>
                    </button>
                    <button class="ggbtn" onclick="location.href='https://es-la.facebook.com/login/device-based/regular/login/'">
                        <img class="img" src='images/ff2.png'>
                </button>                    
                
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