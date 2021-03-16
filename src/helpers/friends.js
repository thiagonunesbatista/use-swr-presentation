export const addFriend = newFriend => {
  let friends = getFriends()

  if (friends) {
    friends.push(newFriend)
  } else {
    friends = [newFriend]
  }
  localStorage.setItem('friends', JSON.stringify(friends))
}

export const getFriends = () => JSON.parse(localStorage.getItem('friends'))
