import aws, { S3 } from 'aws-sdk';
import { ErrorHandler } from '../utils/errorHandler';
import dotenv from 'dotenv';
dotenv.config();

class Bucket {
  private bucket: S3 | any;

  constructor({
    bucketService = new aws.S3({
      accessKeyId: process.env.AWS_ACESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }) {
    this.bucket = bucketService;
  }

  private paramsFactory({ file }: { file: any }) {
    return {
      Bucket: process.env.BUCKET_NAME,
      Key: this.generateKey(),
      Body: file.buffer,
      ACL: 'public-read',
      ContentType: file.mimetype
    };
  }

  async createImage({ file = { buffer: Buffer, mimetype: String } }) {
    try {
      const params = this.paramsFactory({ file });
      return await this.bucket.upload(params).promise();
    } catch (e) {
      console.log(e);
      throw new ErrorHandler(500, 'Erro ao adicionar imagem');
    }
  }

  async deleteImage({ key = String }) {
    return this.bucket.deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: key
    });
  }

  generateKey() {
    return Date.now().toString();
  }
}
export default new Bucket({});
