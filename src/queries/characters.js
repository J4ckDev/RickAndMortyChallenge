import { gql } from "@apollo/client";

export const getCharacters = gql`
    query characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
            }
            results {
                id,
                image,
                name,
                species
            }
        }
    }
`

export const getCharacterById = gql`
    query character($id: ID!) {
        character(id: $id) {
            id,
            image,
            name,
            species,
            status,
            gender,
            type
        }
    }
`