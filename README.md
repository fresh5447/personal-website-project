### Stage One

Create a functional backend capable of CRUD with Articles.

Here is an example `JSON` article.

```
{
  "message": "Article Created",
  "data": {
    "__v": 0,
    "title": "WoopWoop",
    "content": "Some new content!",
    "_id": "59078c6b5a68bb645011fb79"
  }
}
```

Requirements:

Use Mongo & mongoose
Use Express
Ignore Node Modules


### Stage Three

Client Side Crude

For articles implement the following abilities: view all, view one, edit, delete.
It is recommended you render the sub-containers as children of the main Articles component.
Set view all to the IndexRoute.
