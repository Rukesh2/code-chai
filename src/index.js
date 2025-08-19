import 'dotenv/config'
import { connectDB } from './db/db.js';
import app from './app.js';

await connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running ar port: ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log(`MONGODB connection failed !!`,err);
})

