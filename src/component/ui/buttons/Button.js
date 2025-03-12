import './button.css';
const Button = ({name, className}) => {

    return (
        <button className={className}> {name} </button>
    )
}

export default Button