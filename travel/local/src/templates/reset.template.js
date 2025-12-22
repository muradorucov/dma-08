function resetPasswordTemplate(resetLink) {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(90deg, #0074BD, #F2008B);
      color: #fff;
      padding: 30px 20px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
    .body {
      padding: 30px 20px;
      text-align: center;
      color: #333;
      line-height: 1.6;
    }
    .body p {
      margin-bottom: 25px;
      font-size: 16px;
    }
    .btn {
      display: inline-block;
      padding: 15px 25px;
      background-color: #0074BD;
      color: #fff !important;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    .btn:hover {
      background-color: #F2008B;
    }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #888;
      background-color: #f9f9f9;
    }
    .footer a {
      color: #0074BD;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Reset Your Password
    </div>
    <div class="body">
      <p>Hi there,</p>
      <p>We received a request to reset your password. Click the button below to set a new password. This link will expire in 30 minutes.</p>
      <a href="${resetLink}" class="btn">Reset Password</a>
      <p>If you didn't request this, you can safely ignore this email.</p>
      <p>Cheers,<br>Your Company Team</p>
    </div>
    <div class="footer">
      &copy; 2025 Your Company. All rights reserved.<br>
      <a href="#">Privacy Policy</a> | <a href="#">Support</a>
    </div>
  </div>
</body>
</html>

  `
}

module.exports = resetPasswordTemplate;