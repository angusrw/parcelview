package com.ghyston.parcelview.controllers

import org.springframework.web.bind.annotation.*
import com.ghyston.parcelview.sendMail

data class CreateEmailEntity(
  val name: String,
  val address: String
)



@RestController
@RequestMapping("/api") // request to API
class MailController() {
  @PostMapping("/send-mail")
  fun sendMailApi(@RequestBody entity: CreateEmailEntity) = sendMail(entity.name, entity.address)
}