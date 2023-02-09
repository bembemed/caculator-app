
import './button-clear.style.css'
const ButtonClear= (props)=>{
    return <div className="clear-btn" onClick={props.handlerclick}>
        {props.children}
    </div>
}

export default ButtonClear