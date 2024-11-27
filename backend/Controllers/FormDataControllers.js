// Controllers/FormDataControllers.js
const FormData = require("../Models/FormData");
const nodemailer = require("nodemailer");

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "detailingmastersvic@gmail.com", // Your Gmail email address
    pass: "wruv igxe wheu bmgs", // Your Gmail password or app password

  },
});

exports.submitForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, suburb, note, ServiceTitle,photos } =
      req.body;

    // Save form data to the database
    const formData = new FormData({
      firstName,
      lastName,
      email,
      phone,
      suburb,
      note,
      ServiceTitle,
      photos,
    });
    // await formData.save();

    // Send email
    const mailOptions = {
      from: {email},
      to: "detailingmastersvic@gmail.com",
      subject: "Thank You for visiting us",
      html: ` 
        <p>Dear Sir/Mam</p>
        <p>I hope this email finds you well. I am writing to request service for my Car. I have noticed unusual engine noise, dashboard warning light, or scheduled maintenance </p>
          <li><strong>Service:</strong> ${ServiceTitle}</li>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>

          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Suburb:</strong> ${suburb}</li>
          <li><strong>Note:</strong> ${note}</li>
        </ul>s  
      `,
      attachments: photos.map((photo) => ({
        filename: "photo.jpg",
        path: photo,
      })),
    };
    await transporter.sendMail(mailOptions);

    res 
 .status(200)
      .json({ message: "Form data submitted and email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};












