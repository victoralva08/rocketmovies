import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'
import { Tags } from '../../components/Tags'

import { HomeBox, NewMovie, List } from './styles'

import {FiPlus} from 'react-icons/fi' 
import { ButtonText } from '../../components/ButtonText'

export function Home () {
    return (

        <HomeBox>

            <Header title="PocketMovies"></Header>

            <main>

                <h2>Favorite Movies</h2>

                <NewMovie to="/newmovie">
                    <FiPlus />
                    Add Movie
                </NewMovie>

            </main>

            <List>

                <Movie data={{

                title: 'Interstellar',
                content: "Sci-fi thriller directed by Christopher Nolan.",
                tags: [
                    {id: '1', name: 'action'},
                    {id: '2', name: 'sci-fi'}
                ]
                }}
                
                />   

                <Movie data={{

                title: 'Cars',
                content: "Animated movie by Pixar.",
                tags: [
                    {id: '1', name: 'action'},
                    {id: '2', name: 'sci-fi'}
                ]
                }}

                />  

                <Movie data={{

                title: 'Driver',
                content: "Starred by Ryan Gosling.",
                tags: [
                    {id: '1', name: 'action'},
                    {id: '2', name: 'sci-fi'}
                ]
                }}

                />  

            </List>
            
        </HomeBox>

    )
}