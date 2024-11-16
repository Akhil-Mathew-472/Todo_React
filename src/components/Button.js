import { buttonStyle } from "../styles/styles";

export function Button(props){
    return(
        <button
            style={{...buttonStyle, ...props.ownStyle}}
            onClick={props.handleOnClick}
            {...props}>
            {props.text}    
        </button>
    );
}