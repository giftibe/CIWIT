import mongoose from 'mongoose';


function database() {
    mongoose
        .set('strictQuery', true)
        .connect(process.env.DATABASE_URI!, {
            // userCreateIndex: true,
            // useNewUrlParser:true,
            // userUnifiedTopology:true,
        })
        .then(() => {
            console.log('Hurray! ciwit is connected');
        })
        .catch((err) => {
            console.log(
                '====== An error occured while connecting to database ======= ' +
                    err,
            );
        });
}

export default database;
