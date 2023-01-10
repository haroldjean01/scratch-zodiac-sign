import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      {/* <img src="benny.png" /> */}
      <img src={`animals/${props.image}.svg`} />
      <p className="name">{props.name}</p>
      <p>{props.says}</p>
    </div>
  );
}
