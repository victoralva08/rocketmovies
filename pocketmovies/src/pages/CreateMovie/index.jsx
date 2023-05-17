import { Container, Markers, Return } from './styles.js'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import { TextArea } from '../../components/Textarea/index.jsx'
import { MarkersItem } from '../../components/MarkersItem/index.jsx'
import { Button } from '../../components/Button/index.jsx'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie () {
    return (
        <Container>

            <Header title="PocketMovies"/>

            <div>

                <Return to="/"> <FiArrowLeft/> Return</Return>

                <h1>New movie</h1>

                <div class="Inputs">
                    <Input type="text" placeholder="Title" />
                    <Input type="text" placeholder="Score (0 to 5)" />
                </div>

                <TextArea placeholder="Description"/>

                <h2>Markers</h2>

                <Markers>
                    <MarkersItem isNew/>
                    <MarkersItem value="asdasd"/>
                </Markers>

                <footer>
                    <Button title="Delete movie" />
                    <Button title="Save changes" />
                </footer>

            </div>
        </Container>
    )
}