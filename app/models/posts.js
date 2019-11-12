const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PostsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PostsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Posts', PostsSchema)
