// logger.js
import winston from 'winston';

const loggerTeste = winston.createLogger({
  level: 'info', // Nível mínimo de logs a serem registrados
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs.log' }) // Define o arquivo onde os logs serão salvos
  ]
});

export {loggerTeste};
