import { Link, useNavigate } from "react-router-dom"

const Post  = ({post}) => {
    const navigate = useNavigate()

    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        boderRadius: '20px'
    }

    const handleShowDetail = () =>{

        navigate(`/post/${id}`); 
    }
    return (
    <div style={postStyle}>
        <h4>Post of Id: {id}</h4>
        <p>{title}</p>
        <Link to={`/post/${id}`}>Post Detail</Link>
        <Link to={`/post/${id}`}><button>Show Details</button></Link>
         <button onClick={handleShowDetail}>Click To See Detail</button>
    </div>
    )
}

 
export default Post;