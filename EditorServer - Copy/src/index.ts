import app from './App'


const port = process.env.PORT || 3000
//CutomLogger.logger.debug("jjjj")
app.listen(port, () => {
  return console.log(`server is listening on ${port}`)
})