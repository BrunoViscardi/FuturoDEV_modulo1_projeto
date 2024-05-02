import './Cbutton.css'

function Cbutton({type,estilo, onClick, children}){
    return(
        <>
        <button type={type} className={estilo} onClick={onClick}> {children} </button>
        </>
    )
}

export default Cbutton