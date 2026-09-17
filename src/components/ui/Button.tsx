type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
    return (
  <button onClick={props.onClick} disabled={props.disabled} className={`btn ${props.variant}`}>
    {props.text}
  </button>
);
};

export default Button;