import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const key_api= import.meta.env.VITE_API_KEY


export const MoviesApi = createApi({
    reducerPath:'moviesApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3/',}),
    endpoints:(build)=>({
        getSearch:build.query({
            query:(title)=>({url:`/search/movie?language=en-US&query=${title}&page=1&include_adult=false&${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        }),
        getVideoTrailer:build.query({
            query:(id)=>({url:`/movie/${id}/videos?${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        }),
        getDetailsMovie:build.query({
            query:(id)=>({url:`/movie/${id}?${key_api}&language=en-US&append_to_response=releases`}),
            transformResponse:(response,meta,arg)=> response
        }),
        getMovieReviews:build.query({
            query:(id)=>({url:`/movie/${id}/reviews?${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        })
    }),
})


export const {useGetMovieReviewsQuery,useGetVideoTrailerQuery,useGetSearchQuery,useGetDetailsMovieQuery} = MoviesApi;