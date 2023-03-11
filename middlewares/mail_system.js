const nodeMailer = require('nodemailer');

const mail = nodeMailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 587,
    auth: {
        user: 'hoho0259',
        pass: 'senkawa010504@'
    }
})

exports.opt = (user, title, contents) => {
    const mail_opt = {
        from: 'hoho0259@naver.com',
        to: user,
        subject: title,
        text: contents
    }

    return mail_opt;
}

exports.sendMail = (option) => {
    mail.sendMail(option, (err, info) => {
        if (err)
            console.log("error : " + err);
        else
            console.log("complete : " + info);
    })
}
