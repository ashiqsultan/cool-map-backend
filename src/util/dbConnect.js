const mongoose = require('mongoose');

const dbConnectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const dbConnect = async (dbConnectionString) => {
  try {
    await mongoose.connect(dbConnectionString, dbConnectOptions);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('Error: Cannot connect to MongoDB');
    console.error(err.message);
    console.error(err);
  }
};
module.exports = dbConnect;
