package com.ghyston.parcelview

import org.apache.commons.mail.DefaultAuthenticator
import org.apache.commons.mail.HtmlEmail
import com.ghyston.parcelview.controllers.MailController
import java.net.URL

fun sendMail(name: String, address: String){
  val senderEmail = "spegardenshed@gmail.com"
  val password = "ghyston1234"

  val email = HtmlEmail()
  email.hostName = "smtp.gmail.com"
  email.setSmtpPort(465)
  email.setAuthenticator(DefaultAuthenticator(senderEmail, password))
  email.isSSL = true
  email.setFrom(senderEmail)
  email.addTo(address)
  email.subject = "You have a parcel waiting for you."
  val ghystonLogoUrl = URL("https://attachments-cdn.breezy.hr/58b8c631-828f-4a9d-b30c-54842f7fa639/cropped-logo-ghreen.png")
  val cid = email.embed(ghystonLogoUrl, "Ghyston logo")
  email.setHtmlMsg(
    "<html>" +
      "<img src=\"cid:$cid\" width=\"500\">" +
      "<h1>You have a parcel!</h1>" +
      "<p>Dear " + name + ",</p>" +
      "<p>Please come to Ghyston reception to pick it up.</p>" +
    "</html>"
  )
  email.send()
}