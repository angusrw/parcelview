package com.ghyston.parcelview.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class HealthStatus (val status: String)

@RestController
@RequestMapping("/api")
class HealthController {
  @GetMapping("/health")
  fun status(): HealthStatus {
    return HealthStatus(status = "Ok")
  }
}