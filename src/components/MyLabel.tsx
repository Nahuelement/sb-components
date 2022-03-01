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
    fontColor:string
    
}

export const MyLabel = ({label= 'no label', size = 'normal',allCaps=false,color='primary',fontColor='black'}:Props) => {
  return (
    <div>
        <span 
            className={`label ${size} text-${color}`}
            style={{color:fontColor} as any}
            >
            {allCaps?`${label}`.toUpperCase():label}
        </span>

    </div>
  )
}
