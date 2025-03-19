const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,    // Seu e-mail configurado no .env
        pass: process.env.EMAIL_PASS     // Sua senha de app configurada no .env
    }
});

// Função para enviar e-mail
exports.sendEmailNotification = async (to, subject, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ E-mail enviado para: ${to}`);
    } catch (error) {
        console.error(`❌ Erro ao enviar e-mail: ${error.message}`);
    }
};