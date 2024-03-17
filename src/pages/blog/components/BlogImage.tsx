import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from "../../../config/sanityClient"


const BlogImage = ({value}: {value : any}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder(client).image(value).width(800).fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  )
}

export default BlogImage