$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/project.feature");
formatter.feature({
  "line": 1,
  "name": "Test for API Testing class - PROJECT",
  "description": "",
  "id": "test-for-api-testing-class---project",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "GET method for Project API",
  "description": "",
  "id": "test-for-api-testing-class---project;get-method-for-project-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have setup a connection to pivotal_tracker API service",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I send a /projects GET request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I expect Status code 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "POST method for Project API",
  "description": "",
  "id": "test-for-api-testing-class---project;post-method-for-project-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have setup a connection to pivotal_tracker API service",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I send a /projects POST with the json",
  "rows": [
    {
      "cells": [
        "Name",
        "Project 001"
      ],
      "line": 11
    },
    {
      "cells": [
        "Description",
        "Description"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect Status code 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "PUT method for Project API",
  "description": "",
  "id": "test-for-api-testing-class---project;put-method-for-project-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I have setup a connection to pivotal_tracker API service",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I send a /project PUT request to ProjectRequest with json",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 18,
    "value": "  {\r\n    \"name\":\"Project test updated\"\r\n  }"
  }
});
formatter.step({
  "line": 23,
  "name": "I expect Status code 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "DELETE method for Project API",
  "description": "",
  "id": "test-for-api-testing-class---project;delete-method-for-project-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I have set a connection to pivotal_tracker API service",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I send a /project DELETE request to ProjectRequest",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I expect Status code 204",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});