import './Button.css';

function Button(props) {
  return (
    <a href="" className="Btn">{props.children}</a>
  );
}

export default Button;