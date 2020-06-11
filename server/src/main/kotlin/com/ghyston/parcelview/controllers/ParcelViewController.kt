package com.ghyston.parcelview.controllers

import com.ghyston.parcelview.db.ParcelViewEntity
import com.ghyston.parcelview.services.ParcelViewService
import org.springframework.web.bind.annotation.*

data class CreateParcelViewEntity(
  val name: String,
  val email: String
)

@RestController
@RequestMapping("/api") //request to API
class ParcelViewController(val parcelViewService: ParcelViewService) {
  @GetMapping("/database") //does a GET request api/database
  fun listEntities(): List<ParcelViewEntity> = parcelViewService.listEntities()

  @PostMapping("/database") //insert into table
  fun createEntity(@RequestBody entity: CreateParcelViewEntity): ParcelViewEntity =
    parcelViewService.createEntity(entity)

  @PostMapping("/uncollect") //view uncollected package
  fun viewUncollected(@RequestBody name: String): Int =
    parcelViewService.viewUncollected(name)

  @PostMapping("/deleteentry")
  fun deleteEntry(@RequestBody entry: CreateParcelViewEntity) =
    parcelViewService.deleteEntry(entry)
}