/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5wrx4tae6oq91f")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.companies.id = company.id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.companies.id = company.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5wrx4tae6oq91f")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
