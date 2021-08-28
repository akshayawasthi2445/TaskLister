import styled from "styled-components";
// the purpose of using styled-components is that if we have used the button class for another purpose (mistakenly) like for the another button, the class would be applied on it. So to specify the class for a particular tag and not to be used by other tags, we imported and installed styled-components.
//here we have used the styled component syntaxfor the button tag so that the button will get the unique class by the browser whent it gets run on the browser.
const Button = styled.button`
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: blue;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    @media (min-width: 768px){
      width: auto;
    }
  

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
