import './Button.css';

function Button(props) {
  return (
    <a href="" className="btn">{props.children}</a>
  );
}

export default Button;