import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function MarkersItem ({ isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>

        <input 
            placeholder='New Marker'
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest} />

        <button

            type="button"
            onClick={onClick}

            >
                { isNew ? <FiPlus /> : <FiX /> } 

        </button>
        
        </Container>

    )
}