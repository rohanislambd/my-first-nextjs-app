
const PostLayout = ({children}) => {
    return (
        <div>
            <h2>Fixed portion of layout</h2>
            <div>{children}</div>
        </div>
    );
};

export default PostLayout;