// import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// import { img_folder } from './settings.json'
//
// console.log( img_folder )
//
// document.querySelector( '#app' ).innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${ viteLogo }" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${ javascriptLogo }" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))

import validator from "validator/es";

const fields = {
	username: document.getElementById( 'username' ),
	password: document.getElementById( 'password' )
}

const status = {
	username: document.getElementById( 'username-status' ),
	password: document.getElementById( 'password-status' )
}

console.log( validator )

fields.username.addEventListener( 'input', () => {
	const username            = fields.username.value
	const isValid             = validator.isLength( username, {
		min: 3,
		max: 20
	} )
	status.username.innerHTML = isValid ? 'Valid' : 'Invalid'
} )
fields.password.addEventListener( 'input', () => {
	const password            = fields.password.value
	const isValid             = validator.isLength( password, {
		min: 8,
		max: 20
	} )
	status.password.innerHTML = isValid ? 'Valid' : 'Invalid'
} )
