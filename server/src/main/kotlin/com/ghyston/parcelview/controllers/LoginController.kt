package com.ghyston.parcelview.controllers

import org.springframework.web.bind.annotation.*
import com.ghyston.parcelview.Login

data class LoginEntity(
  val username: String,
  val password: String
)

val login = Login()

@RestController
@RequestMapping("/api") // request to API
class LoginController() {
  @PostMapping("/create_account")
  fun createAccount(@RequestBody entity: LoginEntity) = login.createAccount(entity.username, entity.password)

  @PostMapping("/login")
  fun login(@RequestBody entity: LoginEntity) = login.logIn(entity.username, entity.password)

  @PostMapping("/logout")
  fun logout() = login.logOut()

  @GetMapping("/check_login")
  fun checkLogin(): Boolean = login.checkLogin()
}