package com.ghyston.parcelview.db

import javax.persistence.*

@Entity
data class ExampleEntity(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Int,
  val name: String
)

@Entity
data class ParcelViewEntity(
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Int,
  val name: String,
  val email: String
)