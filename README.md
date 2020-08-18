## Data and Database
- The data are extraced using Here Maps API
- The query is done using Here maps Discover Endpoint within a bbox

```
https://discover.search.hereapi.com/v1/discover
?limit=100&q={{QUERY PARAMETER}}
&in=bbox:80.272334,13.065297,80.304692,13.121434
&apiKey={{API KEY}
```
- bbox area scraped: `bbox:80.272334,13.065297,80.304692,13.121434`
- The data is stored in MongoDB

Example of a single **place** document in MongoDB
```
{
                "_id": "5f351304709c4337f4171ec1",
                "placeCategory": "school",
                "title": "Chennai Telugu High School",
                "address": {
                    "label": "Chennai Telugu High School, Ramalingam Street, Anjaneya Nagar, Royapuram, Chennai 600013, India",
                    "countryCode": "IND",
                    "countryName": "India",
                    "state": "Tamil Nadu",
                    "county": "Chennai",
                    "city": "Chennai",
                    "district": "Royapuram",
                    "subdistrict": "Anjaneya Nagar",
                    "street": "Ramalingam Street",
                    "postalCode": "600013"
                },
                "location": {
                    "type": "Point",
                    "coordinates": [
                        80.28791,
                        13.10459
                    ],
                    "_id": "5f3b8273e9e5180750241ae6"
                }
            },
```

## About folders and files

| Name       | Function                                                                    |
| ---------- | --------------------------------------------------------------------------- |
| server.js  | Starts the api server and listens to specified port. Any code you want to run before starting the server can be included in this file                         |
| src folder | Contains all of your app files                                              |
| src/app.js | Initial file which starts the app, routes versions, sends 404 and 500 error |
| src/api    | API versions are seperated into folders and placed inside this folder       |
| src/util   | Contains functions which might be used globally in the app                  |

# How to start

```
npm start
```

Calls the server.js file to start the application.
