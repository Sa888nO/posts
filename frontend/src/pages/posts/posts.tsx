import { useGetPostsQuery } from '../../api/posts/posts';
const Posts = () => {
    const { data, isFetching } = useGetPostsQuery();
    console.log(data, isFetching);
    return <div>Posts</div>;
};
export default Posts;
