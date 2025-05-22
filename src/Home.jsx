import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const dummyData = [
    {
      id: 1,
      name: "John Doe",
      age: 30
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 28
    }
  ]
  return (
    <div>
        <h2>User are here : </h2>
       <div> {dummyData.map((user)=>{
            return(
                <div key={user.id} className='bg-blue-300 w-48 p-5 mx-10 rounded-md my-5'>
                    <Link to={`/Users/${user.id}`}>
                    <h3>{user.name}</h3>
                    <p>{user.age}</p>
                    </Link>
                </div>
            )
        })}
        </div>



    </div>
  )
}

export default Home