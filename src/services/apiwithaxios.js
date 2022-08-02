import axios from 'axios'

export const baseQuery= axios.create({
    baseURL:'https://api.themoviedb.org/3/',
})