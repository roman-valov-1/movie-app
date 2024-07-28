import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import cn from 'classnames';


function Button({ children, styleType = 'normal', page, maxPage, ...props }: IButtonProps) {
   
   return (
      <button {...props} className={cn(styles['button'], {
         [styles['button']]: styleType === 'normal',
         [styles['button_transparent']]: styleType === 'transparent',
         [styles['button_active']]: children == page,
         [styles['button_disabled']]: page == maxPage || (page == 1 && children == 'Prev')
      })}>
         {children}
      </button>
   )
}

export default Button;