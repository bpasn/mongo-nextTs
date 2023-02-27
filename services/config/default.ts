export default {
    formatLogRequest: `:url  [:date[clf]] :method / HTTP/:http-version Body: :body :params :query :remote-addr - :remote-user`,
    port: 3001,
    connectionString: "mongodb://swagger:1234@localhost:27018/swagger?retryWrites=true&w=majority",
    accessTokenPrivateKey: "",
    refreshTokenPrivateKey: "",
    accessTokenPublicKey:"",
    smtp: {
        user: "ddtjaq5ttfpsiqrz@ethereal.email",
        pass: "2Rf6BwTTvQbVkXk1Eh",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
    },
    mockMail: {
        from: "test@example.com",
        to: "someone@example.com",
        subject: "Verify your email",
        text: `verification code WCnc8jBFH2g6P7CWnVrpg . id`
    }

}