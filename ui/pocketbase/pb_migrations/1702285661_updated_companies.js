/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utmxyy7t673aim8")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.companies.id = id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.companies.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utmxyy7t673aim8")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
