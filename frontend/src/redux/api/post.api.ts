import { types } from '../../types/types';
import { baseApi } from './base.api';

const apiRoutes = {
    base: '/posts',
};

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<types.Posts, void>({
            query: () => apiRoutes.base, //PROD DEV
        }),
        createPost: builder.mutation<types.Post, Omit<types.Post, '_id'>>({
            query: (body) => ({
                url: apiRoutes.base,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
