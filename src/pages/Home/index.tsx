import React from 'react'

import useUserStore from '../../stores/user'

const Home = () => {
  const users = useUserStore(state => state.users);

  return (
    <>
      {
        users?.map((user) => (
          <>
            <p key={Math.random()}>{user.name} | {user.email}</p>
          </>
        ))
      }
    </>
  )
}

export default Home;
