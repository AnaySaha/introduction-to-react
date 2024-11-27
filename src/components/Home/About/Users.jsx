import { useLoaderData} from "react-router-dom"

const Users = () => {


    
        <div>
            <h2>our users: {users.lenght} </h2>

            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User> )
                }
              
            </div>
        </div>

};

export default Users;