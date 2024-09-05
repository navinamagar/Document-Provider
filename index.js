function sendEmail() {
   let params={
      from_name: document.getElementById('name-field').value,
      email_id: document.getElementById('email-field').value,
      subject: document.getElementById('subject-field').value,
      message: document.getElementById('message').value
   }
   // emailjs.send("service_a7ffuzi","template_4b6vn01",params,).then(alert("Email sent"))
   console.log(`Name: ${params.from_name}`)
   console.log(`Email: ${params.email_id}`)
   console.log(`Subject: ${params.subject}`)
   console.log(`Message: ${params.message}`)
}
