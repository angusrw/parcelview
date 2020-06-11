package com.ghyston.parcelview.db

import com.ghyston.parcelview.controllers.CreateParcelViewEntity
import org.intellij.lang.annotations.Language
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.Repository
import org.springframework.data.repository.query.Param
import java.sql.Timestamp
import javax.transaction.Transactional

@Transactional(Transactional.TxType.MANDATORY)
interface EntityRepository : CrudRepository<ExampleEntity, Int> //this is limited to crudrepo

@Transactional(Transactional.TxType.MANDATORY)
interface ParcelViewRepository : CrudRepository<ParcelViewEntity, Int>

@Transactional(Transactional.TxType.MANDATORY)
interface RawSqlRepository : CrudRepository<ExampleEntity, Int> { //allow for running of rawsqlquery
  @Language("PostgreSQL")
  @Query("""
    SELECT name
    FROM example_entity example
    WHERE example.id = :example_id
    DESC LIMIT 1;
    """, nativeQuery = true)
  fun exampleRawSqlQuery(@Param("example_id") entityId: Int): ExampleEntity?
}

@Transactional(Transactional.TxType.MANDATORY)
interface ParcelViewRepository2 : CrudRepository<ParcelViewEntity, Int> {
  @Language("PostgreSQL")
  @Query("""
    SELECT * FROM parcel_view_entity
    """, nativeQuery = true)
  fun listTable(): List<ParcelViewEntity>

  @Language("PostgresSQL")
  @Query("""
    INSERT INTO parcel_view_entity VALUES
      (entity.id, entity.name, entity.email);
    """, nativeQuery = true)
  fun createRow(entity : ParcelViewEntity)

  /*@Language("PostgresSQL")
  @Query("""
    DELETE * FROM parcel_view_entity
    WHERE name='Jack Hodgkinson';
  """, nativeQuery = true)
  fun deleteEntry(tbdname: String)*/

  @Language("PostgresSQL")
  @Modifying
  @Query("""
    DELETE FROM parcel_view_entity
	    WHERE name = :tbdname
  """, nativeQuery = true)
  fun deleteEntry(@Param("tbdname") tbdname: String)

}
