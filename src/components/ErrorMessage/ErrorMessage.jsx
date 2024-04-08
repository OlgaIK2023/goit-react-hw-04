
import css from "./ErrorMessage.module.css"


const ErrorMessage = () => {
  return (<div className={css.wrap}>    
    <p className={css.text}>Woooops... Something went wrong. Please reload the page</p>
   </div>

  )
}

export default ErrorMessage