
import './button.style.css'

const isOpertaor = (val)=>{
    return !isNaN(val) || val === '.' || val==='='
}
const Button = (props) =>{
    return <div className={`btn-wrapper 
    ${isOpertaor(props.children) ? null : 'operator'}`}
    onClick={()=> props.handlerInput(props.children)}>
        {props.children}
    </div>
}
export default Button