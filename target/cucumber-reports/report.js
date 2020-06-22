$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google/googleSearch.feature");
formatter.feature({
  "name": "Google Search Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Google search functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter his \"\u003csearchKeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User verify that actualTitle with \"\u003cexpectedTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchKeyword",
        "expectedTitle"
      ]
    },
    {
      "cells": [
        "Galatasaray",
        "Galatasaray - Google Search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Google search functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@google"
    }
  ]
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchFunctionality.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter his \"Galatasaray\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchFunctionality.user_enter_his(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify that actualTitle with \"Galatasaray - Google Search\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionality.user_verify_that_actualTitle_with(String)"
});
formatter.result({
  "status": "passed"
});
});