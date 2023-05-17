import { ButtonTextBox } from './styles'

export function ButtonText ({ title, icon: Icon, ...rest }) {
    return (

        <ButtonTextBox
        {...rest}
        >
            { Icon && <Icon size={20} /> }
            {title}
        </ButtonTextBox>

    )
}