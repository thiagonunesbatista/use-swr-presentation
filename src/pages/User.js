import axios from 'axios'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

import UserCard from 'components/User'
import Loader from 'components/Loader'

const User = () => {
  const { login } = useParams()
  const { data: user } = useSWR(
    `get-user-${login}`,
    async () =>
      await axios(
        `https://api.github.com/users/${login}?client_secret=e7c89ee73f1e6bacbbbd6cb71333d3e509ec3b8a&client_id=c347e10e86a72a8ade32`
      )
  )

  if (!user) {
    return <Loader />
  }

  console.log(user)

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
