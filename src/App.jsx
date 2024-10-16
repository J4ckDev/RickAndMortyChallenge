import { useQuery } from "@apollo/client"

import { getCharacterById, getCharacters } from "./queries/characters"

const RenderCharacters = () => {
    const { loading, error, data } = useQuery(
        getCharacters,
        {
            variables: {
                page: 1
            }
        }
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error {error.message}</p>
    
    return data.characters.results.map(({ id, image, name, species }) => {
        return (
            <div key={id}>
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>{species}</p>
            </div>
        )
    })
}

const RenderCharacter = () => {
    const { loading, error, data } = useQuery(
        getCharacterById,
        {
            variables: {
                id: 817
            }
        }
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error {error.message}</p>
    
    return (
        <div>
            <img src={data.character.image} alt={data.character.name} />
            <p>{data.character.name}</p>
            <p>{data.character.species}</p>
            <p>{data.character.status}</p>
            <p>{data.character.gender}</p>
            <p>{data.character.type}</p>
        </div>
    )

}

export const App = () => {
    return (
        <div>
            <h1>Rick and Morty list</h1>
            <RenderCharacters />
        </div>
    )
}