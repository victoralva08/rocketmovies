import { InputBox } from './styles.js'



export function Input ({ icon: Icon, ...rest}) {
    return (

        <InputBox>
            { Icon && <Icon size={20} /> }
            <input {...rest} />
        </InputBox>

    )
}