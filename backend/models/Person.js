const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    profile_img: {file: {data: Buffer, contentType: String},
        date: {type: Number, default: Date.parse(new Date())/1000}},
    friends: [{friend_id: {type: String, required: true}, date: {type: Number, default: Date.parse(new Date())/1000}}],
    pending_friends_sender: [{friend_id: {type: String, required: true}, date: {type: Number, default: Date.parse(new Date())/1000}}],
    pending_friends_reciever: [{friend_id: {type: String, required: true}, date: {type: Number, default: Date.parse(new Date())/1000}}],
    post: [{file: {data: Buffer, contentType: String},
            like: {type: Number, required: true},
            date: {type: Number, default: Date.parse(new Date())/1000}}],
    date:{
        type: Date,
        default: Date.now
    }
    });
  const Person = mongoose.model('person', personSchema);
  module.exports = Person;