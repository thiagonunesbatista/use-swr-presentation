import { Link } from 'react-router-dom'

import Loader from 'components/Loader'
import User from 'components/User'
import UsersWrapper from 'components/UsersWrapper'

import useGetApi from 'hooks/useGetApi'

import { showUsers } from 'services/users'

const ListUsersSWR = () => {
  const { data: users } = useGetApi('show-users', showUsers)

  if (!users) {
    return <Loader />
  }

  return (
    <UsersWrapper>
      {users?.data?.map(currentUser => (
        <Link key={currentUser.id} to={`/user/${currentUser.id}`}>
          <User>
            <img src={currentUser.avatar_url} alt={`${currentUser.login}`} />
            <p>{currentUser.name}</p>
            <p>{currentUser.login}</p>
          </User>
        </Link>
      ))}
    </UsersWrapper>
  )
}

export default ListUsersSWR
