const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const passport = require("passport")
const app = express()

// 引入 users.js
const users = require("./routes/api/users")
// 引入配置信息 profile.js
const profiles = require("./routes/api/profiles")

// DB config
const db = require("./config/keys").mongoURI

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// app.get("/", (req, res) => {
//     res.send("Hello World! 哈哈")
// })

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
          .then(() => console.log('MongoDB连上啦'))
          .catch(err => console.log(err))

// passport初始化
app.use(passport.initialize())

require("./config/passport")(passport)

// 使用 routes
app.use("/api/users", users)

// 执行前端静态页面
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}

// 使用profiles
app.use("/api/profiles", profiles)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
