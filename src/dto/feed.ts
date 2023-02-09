import { faker } from '@faker-js/faker'
import { UserDTO } from './user'

export type FeedDTO = {
  feedId: number
  feedRegTimestamp: number
  content: string
  message: string
} & Pick<UserDTO, 'userId' | 'profileSrc' | 'userName'>

export const generateDummyFeed = (id: number): FeedDTO => ({
  message: faker.lorem.paragraph(),
  content: faker.lorem.word(),
  feedRegTimestamp: faker.datatype.datetime({ min: 1577836800000, max: 1893456000000 }).getTime(),
  profileSrc: faker.image.imageUrl(200, 200),
  userId: faker.datatype.number(),
  feedId: id,
  userName: faker.name.fullName(),
})

export const generateDummyFeedArray = (): FeedDTO[] => {
  const feedCount: number = faker.datatype.number({ min: 10, max: 15 })
  return Array.from({ length: feedCount }, (_, i) => i).map(id => generateDummyFeed(id))
}
