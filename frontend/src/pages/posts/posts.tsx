import PostCart from '../../modules/PostCart/PostCart';
import api from '../../redux/api';
const Posts = () => {
    const { data, isFetching } = api.getPosts();
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
            {data?.map((m, index) => (
                <PostCart
                    description={m.description}
                    title={m.title}
                    key={index}
                />
            ))}
        </div>
    );
};
export default Posts;
