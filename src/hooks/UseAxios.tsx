import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

type AxiosProps = {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  config?: AxiosRequestConfig
}

axios.defaults.baseURL = 'https://apis.data.go.kr'
export default function useAxios({ method, url, config }: AxiosProps) {
  // console.log('method', method)
  // console.log('url',url);
  // console.log('config',config);
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)
  const fetchData = () => {
    axios[method](url, config)
      .then(res => {
        setResponse(res.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { response, error, loading, setResponse }
}
