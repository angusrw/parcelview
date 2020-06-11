package com.ghyston.parcelview.services

import com.ghyston.parcelview.controllers.CreateParcelViewEntity
import com.ghyston.parcelview.db.ParcelViewEntity
import com.ghyston.parcelview.db.ParcelViewRepository
import com.ghyston.parcelview.db.ParcelViewRepository2
import org.springframework.stereotype.Service
import javax.transaction.Transactional
import java.util.Collections

@Transactional
@Service
class ParcelViewService(val entityRepo : ParcelViewRepository, val entityRepo2 : ParcelViewRepository2) {
  fun listEntities(): List<ParcelViewEntity> =
      entityRepo2.listTable()

  fun createEntity(parcelViewEntity: CreateParcelViewEntity): ParcelViewEntity =
    entityRepo.save(ParcelViewEntity(0, parcelViewEntity.name, parcelViewEntity.email))

  fun createRow(parcelViewEntity: CreateParcelViewEntity) =
    entityRepo2.createRow(ParcelViewEntity(0, parcelViewEntity.name, parcelViewEntity.email))

  fun deleteEntry(entry: CreateParcelViewEntity) {
    entityRepo2.deleteEntry(entry.name)
  }

  fun viewUncollected(name: String): Int {
    val occurrences: Int
    occurrences = Collections.frequency(listEntities(), name)
    return occurrences
  }
}