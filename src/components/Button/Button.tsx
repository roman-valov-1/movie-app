import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

function Button({children, ...props}: IButtonProps) {
   return (
      <button {...props} className={styles['button']}>
         {children}
      </button>
   )
}

export default Button;