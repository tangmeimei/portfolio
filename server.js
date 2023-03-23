var express = require('express')
var nodemailer = require("nodemailer");

// 加载body-parser 处理post提交过来的数据
var bodyParser = require('body-parser');
var app = express()
var apiRoutes = express.Router()

app.use('/', express.static('./dist'))

// bodyParser 设置,自动会在req上面添加
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
apiRoutes.post('/email', function (req, res) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>')
    if (req.body.fullName && req.body.email) {
        res.json({
            iRet: 1,
            info: 'ok',
        });

        // Use Smtp Protocol to send Email
        var transporter = nodemailer.createTransport({
            service: 'qq',
            // host: "smtp.qq.com",
            port: 465,
            secure: true,
            auth: {
                user: "895257516@qq.com",
                pass: "xpqyhgzdxtbpbehj",
            }
        });

        var mailOptions = {
            from: "895257516@qq.com",
            to: "tangmeizhi1@gmail.com",
            subject: req.body.subject,
            html: `<h1>${req.body.email}给你留言了</h1>
            <p>${req.body.message}</p>
            `,
            // html: '<b>Hello world ?</b>' // html 内容
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('邮件发送: ' + info.response);
            transporter.close();
        });

    } else {
        res.json({
            iRet: -1,
            info: 'error',
        });
        return;
    }
});
app.use('/api', apiRoutes)


app.listen(8081, function () {
    console.log("邮箱服务器运行在8081端口")
})
