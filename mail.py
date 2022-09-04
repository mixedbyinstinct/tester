import smtplib
2

3
gmail_user = 'your_email@gmail.com'
4
gmail_password = 'your_password'
5

6
sent_from = gmail_user
7
to = ['person_a@gmail.com', 'person_b@gmail.com']
8
subject = 'Lorem ipsum dolor sit amet'
9
body = 'consectetur adipiscing elit'
10

11
email_text = """\
12
From: %s
13
To: %s
14
Subject: %s
15

16
%s
17
""" % (sent_from, ", ".join(to), subject, body)
18

19
try:
20
    smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
21
    smtp_server.ehlo()
22
    smtp_server.login(gmail_user, gmail_password)
23
    smtp_server.sendmail(sent_from, to, email_text)
24
    smtp_server.close()
25
    print ("Email sent successfully!")
26
except Exception as ex:
27
    print ("Something went wrong….",ex)
