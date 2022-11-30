import './Button.css'
const Button = ({children})=>{
    return(
        <div className='btn'>

        <button className="btn-component">
            {children}
        </button>
        </div>
    )
}

export default Button