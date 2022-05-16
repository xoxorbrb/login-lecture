const { createLogger, transports,  format }=  require("winston");
const { combine, timestamp, label ,printf, json, simple, colorize} = format; 

const printFormat = printf(({timestamp, label , level ,message})=> {
    return `${timestamp} [${label}] ${level}:  HI!! ${message}`;
});

const printLogFormat = {
    file: combine(
    label({
        label: "백엔드 맛보기"
    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",            
    }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
};
const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
};

const logger = createLogger ({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") { //실제 서비스 하고 있는 서버가 아닌 경우
    logger.add(opts.console);
}
module.exports = logger;