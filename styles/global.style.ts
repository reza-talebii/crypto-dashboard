import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  direction: rtl;
}


body,h1,h2,h3,h4,h5,h6,div,p,strong,button,select,textarea,label,input,input::placeholder,span:not(.material-icons){
  font-family: YekanBakhFaNum !important;
}

body{
  background: #E8F4FF !important;
}


/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.primary};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:  ${props => props.theme.colors.primary};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  ${props => props.theme.colors.primary};
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #333;
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
mark{
  background: transparent !important;
  font-weight: 700;
}


input::placeholder {
  color: #112211 !important;
    opacity: 0.75 !important;
}

button, [type="button"], [type="reset"], [type="submit"] {
    appearance: button;
    background-color:${props => props.theme.colors.primary} !important;
    background-image: inherit;
}

.ant-divider-inner-text{
  color: #afafaf;
  font-size: 14px;
}

.ant-form-item-explain{
  margin-right: 15px;
}

/* .ant-select-dropdown{
  min-width: 250px !important;
  transform: translateX(101px) !important;

} */

.ant-picker-dropdown .ant-picker-header button{
  background-color: transparent !important;
}

.ant-picker-dropdown{
  margin-top: 1rem !important;
}


`
