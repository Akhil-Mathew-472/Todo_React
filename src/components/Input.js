export function Input(props){
  return (
    <input
      style={props.style}
      type={props.type}
      onChange={props.handleOnChange}
      {...props}>
          {props.text}
      </input>
  );
}