import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const key_api= import.meta.env.VITE_API_KEY


export const MoviesApi = createApi({
    reducerPath:'moviesApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3/',}),
    endpoints:(build)=>({
        geTrendingWeek:build.query({
            query:()=>({url:`/trending/movie/week?${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        }),
        getPopularity:build.query({
            query:()=>({url:`/movie/popular?language=en-US&${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        }),
        getUpcomming:build.query({
            query:()=>({url:`/movie/upcoming?language=en-US&page=1&${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        }),
        getSearch:build.query({
            query:(title)=>({url:`/search/movie?language=en-US&query=${title}&page=1&include_adult=false&${key_api}`}),
            transformResponse:(response,meta,arg)=> response?.results
        })
    }),
})


export const {useGeTrendingWeekQuery,useGetPopularityQuery,useGetUpcommingQuery,useGetSearchQuery} = MoviesApi;