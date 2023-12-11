/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utmxyy7t673aim8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yarsv7o8",
    "name": "hlq",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utmxyy7t673aim8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yarsv7o8",
    "name": "shortname",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
