import axios from 'axios'

export const getUser = username =>
  axios(`https://api.github.com/users/${username}`)

export const getUserRepos = (username, perPage = 8) =>
  axios(`https://api.github.com/users/${username}/repos?per_page=${perPage}`)

export const searchUsers = (searchParam, perPage = 8) =>
  axios(
    `https://api.github.com/search/users?q=${searchParam}&per_page=${perPage}`
  )

export const showUsers = (perPage = 8) =>
  axios(`https://api.github.com/users?per_page=${perPage}`)
