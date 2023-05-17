import { ButtonBox } from './styles'

export function Button ({ title, loading, ...rest }) {
    return (
        <ButtonBox
        disabled={loading}
        {...rest}
        >
            { loading ? "Loading..." : title }
        </ButtonBox>
    )
}