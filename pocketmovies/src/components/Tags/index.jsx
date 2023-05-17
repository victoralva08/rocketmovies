import { TagBox } from './styles'

export function Tags ({ title, ...rest }) {
    return (
        <TagBox {...rest}>
            {title}
        </TagBox>
    )
}