import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Loader from 'components/Loader'
import User from 'components/User'
import UsersWrapper from 'components/UsersWrapper'

import { showUsers } from 'services/users'

const ListUsersUseEffect = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const response = await showUsers()
        setUsers(response.data)
      } catch (error) {
        alert('api error')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <UsersWrapper>
      {users?.map(currentUser => (
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

export default ListUsersUseEffect
