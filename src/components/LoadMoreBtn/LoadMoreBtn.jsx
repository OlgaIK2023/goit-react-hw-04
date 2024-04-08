import css from "./LoadMoreBtn.module.css"


const LoadMoreBtn = ({onClickButton}) => {
  return <button type="button" className={css.btn} onClick={onClickButton}>Load more</button>
}

export default LoadMoreBtn
