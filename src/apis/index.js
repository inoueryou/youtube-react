import axios from 'axios'

const KEY = 'AIzaSyAHw4wS3KeQd2wf5uovBlSeo-LWu2JWOl4'

const youtube = axios.create({
  baseURL :'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  })
}