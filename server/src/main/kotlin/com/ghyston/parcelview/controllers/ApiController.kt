package com.ghyston.parcelview.controllers

import com.ghyston.parcelview.db.ExampleEntity
import com.ghyston.parcelview.sendMail
import com.ghyston.parcelview.services.EntityService
import org.springframework.web.bind.annotation.*

data class CreateExampleEntity(
  val name: String
)

@RestController
@RequestMapping("/api")
class ApiController(val entityService: EntityService) {
  @GetMapping("/example-entity")
  fun listActivities(): List<ExampleEntity> = entityService.listEntities()

  @PostMapping("/example-entity")
  fun createEntity(@RequestBody entity: CreateExampleEntity): ExampleEntity = entityService.createEntity(entity)
}
