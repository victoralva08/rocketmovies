import { TextBox } from './styles'

export function TextArea ({ content, ...rest }) {
    return (
        <TextBox {...rest}>
            {content}
        </TextBox>
    )
}