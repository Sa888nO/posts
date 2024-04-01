import styles from './PostCart.module.less';

type PostCartProps = {
    title: string;
    description: string;
};

const PostCart = ({ title, description }: PostCartProps) => {
    return (
        <div className={styles.postCart}>
            <h3>{title}</h3>
            <div>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default PostCart;
