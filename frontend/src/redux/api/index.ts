import { postApi } from './post.api';
const { useCreatePostMutation, useGetPostsQuery } = postApi;

export default {
    getPosts: useGetPostsQuery,
    createPost: useCreatePostMutation,
};
