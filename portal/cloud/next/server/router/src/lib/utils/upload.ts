import { ImageUploader, UploadImageType } from '@magickml/storage'

export const uploadImage = async (
  id: string,
  image: string,
  type: UploadImageType
) => {
  const imageUploader = new ImageUploader({
    accessKeyId: process.env?.['AWS_ACCESS_KEY_ID'] || '',
    secretAccessKey: process.env?.['AWS_SECRET_ACCESS_KEY'] || '',
    region: process.env?.['AWS_REGION'] || '',
    endpoint: process.env?.['AWS_ENDPOINT'] || '',
    bucketName: process.env?.['AWS_BUCKET_NAME'] || '',
  })

  return imageUploader.uploadImage(id, image, type)
}
