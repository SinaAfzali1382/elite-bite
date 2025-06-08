import os
import random
import smtplib
from ctypes.wintypes import HHOOK
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
load_dotenv()

def sendEmail(receiver_email: str, subject: str, html: str) -> int:
    smtp_server = "smtp.gmail.com"
    port = os.getenv("EmailPort")
    sender_email = os.getenv("EmailSender")
    password = os.getenv("EmailSenderPassword")
    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = sender_email
    message["To"] = receiver_email
    html_body = html

    html_part = MIMEText(html_body, "html")
    message.attach(html_part)

    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        return True
    except Exception as e:
        return -False
