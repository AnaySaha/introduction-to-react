import {useLoaderData} from "react-router-dom";

const Posts = () => {
    const posts = useLoaderData();
    return(
    <div>
        <h2>Posts: {posts.length}</h2>
    </div>
    )
}

const Posts = () => {
    return (
        <div>
            
        </div>
    );
};

export default Posts;