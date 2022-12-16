const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true , required: true} ,
  email: { type: String, unique: true , required: true} ,
  thought: [{ type: Objectid, ref: 'Thought'}] ,
  friends: [{ type: Objectid, ref: 'User'}] ,
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {type: String, required: true , maxLength: 280 } ,
  createdAt: {
          type: Date,
          get: (date) => timeSince(date) ,
  } ,
  username: { type: String , required: true} ,
}) ;

const reactionSchema = new mongoose.Schema({
  reactionid: {type: ObjectId , default: objectId.new} ,
  reactionBody: { type: String, required: true, maxLength: 280} ,
  username: { type: String, required: true} ,
  createdAt: {
    type: Date,
    get: (date) => timeSince(date) ,
} ,
}) ;