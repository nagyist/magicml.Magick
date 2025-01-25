import { templatesRouter } from './template.router'
import { templateVersionRouter } from './template-version.router'
import { templateRatingRouter } from './template-rating.router'
import { templateCollectionRouter } from './template-collection.router'

export const templateRouters = {
  base: templatesRouter,
  version: templateVersionRouter,
  rating: templateRatingRouter,
  collection: templateCollectionRouter,
}
