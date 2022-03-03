import './mylabel.css'


export interface Props{
     /**
   *Valor de el Label
   */
    label:string,
     /**
   *Size por Defecto
   */
    size:'normal' | 'h1' | 'h2' | 'h3',
 /**
   *Capitalizar Label
   */
    allCaps:boolean,
/**
   *colores por defecto
   */
    color: 'primary' | 'secondary' |  'tertiary',
    /**
   *SEleccionar color de la fuente
   */
    fontColor:string,
        /**
   *SEleccionar color de la fuente
   */
   backgroundColor?:string
    
}

export const MyLabel = ({
  label= 'no label', 
  size = 'normal',
  allCaps=false,
  color='primary',
  fontColor='black',
  backgroundColor='transparent'
}:Props) => {
  return (
    <div>
        <span 
            className={`label ${size} text-${color}`}
            style={{color:fontColor,backgroundColor} as any}
            >
            {allCaps?`${label}`.toUpperCase():label}
        </span>

    </div>
  )
}
