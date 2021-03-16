import axios from 'axios'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

import UserCard from 'components/User'
import Loader from 'components/Loader'

const User = () => {
  const { login } = useParams()

  const { data: user } = useSWR(
    `get-user-${login}`,
    async () => await axios(`https://api.github.com/users/${login}`)
  )

  if (!user) {
    return <Loader />
  }

  return (
    <UserCard>
      <p>{login}</p>
      <p>{user.data.followers} Followers</p>
      <p>{user.data.following} Following</p>
      <p>{user.data.location}</p>
      <p>{user.data.public_repos} Repos</p>
    </UserCard>
  )
}

export default User
