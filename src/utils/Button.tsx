

interface IButtonProps{
    children:React.ReactNode,
    onClick?() : void,
    type?:"button" | "submit",
    disabled?:boolean,
    className?:string
}


export const Button : React.FC<IButtonProps> = ({className,disabled,children, onClick,type}) => {
  return (
    <button className={className} disabled={disabled} type={type}  onClick={onClick}>{children}</button>
  )
}

Button.defaultProps={
  type:"button",
  disabled:false,
  className:'btn btn-primary'
}
