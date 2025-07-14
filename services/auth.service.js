const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const nodemailer = require('nodemailer');

const UserService = require('./users.services');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = (await service.findByEmail(email)).dataValues;
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.password;
    return user;
  }
  async signToken(user) {
    try {
      const payload = {
        sub: user.id,
        role: user.role,
      };
      const token =  jwt.sign(payload, config.jwtSecret);
      delete user.recoveryToken
      return {  user,  token, }

    } catch (error) {
      throw boom.unauthorized()

    }
  }
  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });


    const url = config.env == 'dev' ? 'http://localhost:5173' : 'http://retazosdesol.com'
    const link = `${url}/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });
    const mail = {
      from: `${config.mail}`, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'Reset Password', // Subject line
      // text: "Correo para cmabiar la contraseña  ", // plain text body
      html: `<b>Hello Voy a cambiar la contraseña  Ingresa a este link  => ${link}</b>`, // html body
    };
    const rta = await this.sendMAil(mail);
    return rta;
  }
  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = (await service.findOne(payload.sub)).dataValues;
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, { recoveryToken: null, password: hash });
      return { message: 'password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMAil(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.gmail,
        pass: config.gmailAppKey,
      },
    });
    await transporter.sendMail(infoMail);

    return { message: 'mail sent' };
  }
}

module.exports = AuthService;
