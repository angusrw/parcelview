package com.ghyston.parcelview.services

import com.ghyston.parcelview.controllers.CreateExampleEntity
import com.ghyston.parcelview.db.ExampleEntity
import com.ghyston.parcelview.db.EntityRepository
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Transactional
@Service
class EntityService(val entityRepo: EntityRepository) {
  fun listEntities(): List<ExampleEntity> =
    entityRepo.findAll().toList()

  fun createEntity(exampleEntity: CreateExampleEntity): ExampleEntity =
    entityRepo.save(ExampleEntity(0, exampleEntity.name))
}