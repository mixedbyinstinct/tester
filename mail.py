import smtplib



user = 'instinct@instinctmxd.com'

password = 'Fla-mingo.22'



sent_from = user

to = 'instinct@instinctmxd.com'

subject = 'New Upload'

body = 'Someone uploaded a session you know the drillington'



email_text = """\

From: %s

To: %s
Subject: %s



%s

""" % (sent_from, ", ".join(to), subject, body)



try:

    smtp_server = smtplib.SMTP_SSL('smtp.dreamhost.com', 465)

    smtp_server.ehlo()

    smtp_server.login(user, password)

    smtp_server.sendmail(sent_from, to, email_text)

    smtp_server.close()

    print ("Email sent successfully!")

except Exception as ex:

    print ("Something went wrong...",ex)
