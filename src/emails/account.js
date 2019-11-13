const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'wer321011@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welecom to the APP, ${name}`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'wer321011@gmail.com',
    subject: 'Sorry to see you leave!',
    text: `WHY YOU LEAVE, ${name}?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
