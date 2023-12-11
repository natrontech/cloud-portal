/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("87uurdcwmbhj67a")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.companies.id = report.company.id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.companies.id = report.company.id"

  // remove
  collection.schema.removeField("o12fxabi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mw7votcb",
    "name": "report",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k5wrx4tae6oq91f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("87uurdcwmbhj67a")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.companies.id = company.id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.companies.id = company.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o12fxabi",
    "name": "company",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "utmxyy7t673aim8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("mw7votcb")

  return dao.saveCollection(collection)
})
