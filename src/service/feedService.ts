import { FeedDTO, generateDummyFeedArray } from '../dto/feed'
//import http from '../util/http'
class FeedService {
  getFeed(): Promise<FeedDTO[]> {
    // this`ll be replace to http.get('someUrl')
    return new Promise(resolve => {
      setTimeout(() => resolve(generateDummyFeedArray()), 1000)
    })
  }
}

export default new FeedService()
