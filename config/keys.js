// module.exports = {
//   mongoURI:
//     "mongodb+srv://dev:AAS87kdfGRZpoWYU@cluster0-iezu8.mongodb.net/test?retryWrites=true&w=majority",
//   secretOrKey: 'zFWrtNmC78'
//   //Make sure this is your own unique string
// };

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

//mongodb+srv://dev:<password>@cluster0-iezu8.mongodb.net/test?retryWrites=true&w=majority