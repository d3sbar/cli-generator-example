
// Defines Mongoose model for service `like`.
const deepMerge = require('deepmerge');
const mongoose = require('mongoose'); // eslint-disable-line no-unused-vars
//!code: imports //!end
//!code: init //!end

let moduleExports = deepMerge.all([{},
  //!<DEFAULT> code: model
  {
    uuid: mongoose.Schema.ObjectId,
    authorUuid: mongoose.Schema.ObjectId,
    commentUuid: mongoose.Schema.ObjectId
  },
  //!end
  //!code: moduleExports //!end
]);

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end