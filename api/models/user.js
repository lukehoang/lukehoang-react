const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const saltRound = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', function(next){
//     //check if document is new or a new password has been set
//     if(this.isNew || this.isModified('password')){
//         //saving reference to this b/c of changing scopes
//         const document = this;
//         bcrypt.hash(document.password, saltRound, function(err, hashedPassword){
//             if(err){
//                 next(err);
//             }else{
//                 document.password = hashedPassword;
//                 next();
//             }
//         });
//     }else{
//         next();
//     }
// });

// userSchema.methods.isCorrectPassword = function(password, callback){
//     bcrypt.compare(password, this.password, function(err, same) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(err, same);
//       }
//     });
//   }

//export subscribers data to schema
module.exports = mongoose.model('User', userSchema);

