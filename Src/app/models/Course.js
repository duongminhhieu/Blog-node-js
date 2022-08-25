const slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
