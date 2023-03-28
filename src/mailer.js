import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: 'attendancetracking2022@gmail.com', // generated ethereal user
      pass: 'hkllnbmqbmtaiijj', // generated ethereal password
    },
});

transporter.verify().then(() => {
    console.log('Ready for send email');
}); 


const sendEmail = async(message)=>{
    try {
        await transporter.sendMail(message);
    } catch (error) {
        console.log(error);
    }
};
module.exports ={sendEmail};
