package com.ghyston.parcelview

class Login {
  var accounts: MutableMap<String, String> = mutableMapOf("admin" to "password")
  var loggedIn: Boolean = false

  fun createAccount(username: String, password: String) {
    if (this.loggedIn) {
      this.accounts.put(username, password)
    }
  }


  fun logIn(username: String, password: String) {
    if (this.accounts.get(username) == password) {
      this.loggedIn = true
      print("Login successful...")
    }
    else {
      print("Login failed...")
    }
  }

  fun logOut() {
    this.loggedIn = false
    print("Logged out...")
  }

  fun checkLogin(): Boolean {
    return this.loggedIn
  }
}