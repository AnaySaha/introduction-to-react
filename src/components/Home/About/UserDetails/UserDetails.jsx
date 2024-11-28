

const UserDetails = () => {
    const user = useLoaderData();

    const {name} = user;
    return (
        <div>
         <h2>Details of Users: {name}</h2>   
        </div>
    );
};

export default UserDetails;