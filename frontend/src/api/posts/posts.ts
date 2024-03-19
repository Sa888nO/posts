import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { types } from '../../types/types';
export const postsApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getPosts: builder.query<types.Posts, void>({
            query: () => 'http://localhost:3000/api/posts',
        }),
        createPost: builder.mutation<types.Post, Omit<types.Post, '_id'>>({
            query: (body) => ({
                url: '/posts',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
