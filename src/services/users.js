import axios from 'axios'

export const getUser = username =>
  axios(
    `https://api.github.com/users/${username}?client_secret=e7c89ee73f1e6bacbbbd6cb71333d3e509ec3b8a&client_id=c347e10e86a72a8ade32`
  )

export const getUserRepos = (username, perPage = 8) =>
  axios(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&client_secret=e7c89ee73f1e6bacbbbd6cb71333d3e509ec3b8a&client_id=c347e10e86a72a8ade32`
  )

export const searchUsers = (searchParam, perPage = 8) =>
  axios(
    `https://api.github.com/search/users?q=${searchParam}&per_page=${perPage}&client_secret=e7c89ee73f1e6bacbbbd6cb71333d3e509ec3b8a&client_id=c347e10e86a72a8ade32`
  )

export const showUsers = (perPage = 8) =>
  axios(
    `https://api.github.com/users?per_page=${perPage}&client_secret=e7c89ee73f1e6bacbbbd6cb71333d3e509ec3b8a&client_id=c347e10e86a72a8ade32`
  )
