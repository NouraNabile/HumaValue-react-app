type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};
const Card = (props: CardProps) => {
    return (
  <div className="card">
    {props.image && <img src={props.image} alt={props.title} />}
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    {props.children}
  </div>
);};

export default Card;