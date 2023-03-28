const  {sendEmail } = require("./../mailer");

//TODO: SendEmail
export const sendEmailAdve  = async (req, res) => {
    const {correo} = req.body; 
    try {
        // send mail with defined transport object
         const message  = {
          from: '"  " <attendancetracking2022@gmail.com>', // sender address
          to: correo, // list of receivers
          subject: "Se le ha enviado el correo de advertencia", // Subject line
          html: `
          <b style = "color: red; font-size:15px; font-weight: bold;"> El presente de esté correo es para advertirles que ha faltado más de una vez en el curso, por lo que se le va a inicar el debido proceso.</b>
          <br>
          <div style="display: flex; flex-direction: column;">
            <img src="https://imagizer.imageshack.com/img924/5620/yuAncf.png" style = " width:150px; height: 20vh;">
            <b>BY: Attendance Tracking</b>
          </div>  
          ` // html body
        };
        await sendEmail(message)
        res.status(200).json({message:'Mensaje enviado'});
      } catch (error) {
        return res.status(400).json({message:'Somethings goes wrong!'})
    }
}
