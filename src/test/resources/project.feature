Feature: Test for API Testing class - PROJECT


  Scenario: POST method for Project API
    When I send a /projects POST with the json
    """
      {
        "name":"Project_011123"
      }
    """
    Then I expect Status code 200

  Scenario: GET method for Project API
    When I send a /projects GET request
    Then I expect Status code 200


#  Scenario: POST method for Project API
#    When I send a /projects POST with the table
#      | name | Project Jin_TABLE_001 |
#    Then I expect Status code 200

  Scenario: PUT method for Project API
    When I send a /projects/[project.id] PUT with the json
    """
      {
        "name":"Project UPDATED"
      }
    """
    Then I expect Status code 200

#  Scenario: PUT method for Project API
#    When I send a /projects/1858879 PUT request with json
#    """
#      {
#        "name":"Project test updated"
#      }
#    """
#    Then I expect Status code 200
#
#   Scenario: DELETE method for Project API
#    Given I have setup a connection to pivotal_tracker API service
#    When I send a /project DELETE request to ProjectRequest
#    Then I expect Status code 204