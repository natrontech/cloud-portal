/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j8n5lurcenuem4w",
    "created": "2023-12-11 09:19:43.924Z",
    "updated": "2023-12-11 09:19:43.924Z",
    "name": "pricings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tsrkyiwr",
        "name": "resource",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "t4rdphzj",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j8n5lurcenuem4w");

  return dao.deleteCollection(collection);
})
