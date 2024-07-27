import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import cn from 'classnames';


function Button({ children, styleType = 'normal', ...props }: IButtonProps) {
   
   return (
      <button {...props} className={cn(styles['button'], {
         [styles['button']]: styleType === 'normal',
         [styles['button_transparent']]: styleType === 'transparent',
      })}>
         {children}
      </button>
   )
}

export default Button;