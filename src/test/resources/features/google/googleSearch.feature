
Feature: Google Search Functionality

  @google
  Scenario Outline: Google search functionality

    Given User is on home page
    When User enter his "<searchKeyword>"
    Then User verify that actualTitle with "<expectedTitle>"
    Examples:
      | searchKeyword | expectedTitle               |
      | Galatasaray   | Galatasaray - Google Search |