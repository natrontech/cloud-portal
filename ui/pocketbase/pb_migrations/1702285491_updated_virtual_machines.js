/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("87uurdcwmbhj67a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pwoubwqn",
    "name": "storage",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcd3hvg8",
    "name": "backup_storage",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("87uurdcwmbhj67a")

  // remove
  collection.schema.removeField("pwoubwqn")

  // remove
  collection.schema.removeField("gcd3hvg8")

  return dao.saveCollection(collection)
})
