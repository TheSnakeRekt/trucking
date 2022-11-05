import styles from './RoundButton.module.css'

const RoundButton = props => (<div>
    <button className={styles['add-vehicle']} onClick={props.buttonClickHandler}>
      +
    </button>
  </div>
)

export default RoundButton;