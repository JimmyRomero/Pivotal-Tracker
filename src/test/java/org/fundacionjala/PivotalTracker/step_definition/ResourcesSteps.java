package org.fundacionjala.PivotalTracker.step_definition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import org.fundacionjala.PivotalTracker.RequestManager;

import static junit.framework.TestCase.assertEquals;

/**
 * Resources Steps
 */
public class ResourcesSteps {

    private Response response;

//    @Before
//    public void i_send_a_project_POST_with_the_json1(String endPoint, String jsonData) {
//        response = RequestManager.post(endPoint,jsonData);
//        System.out.println(response.body().toString());
//    }

    @When("^I send a (.*) GET request$")
    public void iSendAProjectGETRequest(String endPoint){
        response = RequestManager.get(endPoint);
    }

    @Then("^I expect Status code (\\d+)$")
    public void iExpectStatusCode(int statusCode) {
        assertEquals(statusCode, response.getStatusCode());
    }

//    @When("^I send a (.*) POST with the table$")
//    public void i_send_a_project_POST_with_the_json(String endPoint, Map<String, Object> jsonData) {
//        response = RequestManager.post(endPoint,jsonData);
//        System.out.println(response.prettyPrint());
//    }

    @When("^I send a (.*) POST with the json$")
    public void i_send_a_project_POST_with_the_json(String endPoint, String jsonData) {
      response = RequestManager.post(endPoint,jsonData);

    }

    @When("^I send a (.*) PUT with the json$")
    public void i_send_a_project_PUT_request_to_ProjectRequest_with_json(String endPoint, String jsonData) {
        System.out.println(endPoint);
        String finalEndpoint = formatEndpoint(endPoint);
        System.out.println(finalEndpoint);
        //response = RequestManager.put(finalEndpoint, jsonData);
    }

    public String formatEndpoint(String endPoint) {
        //Pattern p = Pattern.compile("[A-Za-z0-9.]+");
        JsonPath jsonResponse = new JsonPath(response.body().asString());
        StringBuilder endpoint = new StringBuilder();
        StringBuilder splitString = endpoint.replace(endPoint.indexOf("["), endPoint.indexOf("]"), jsonResponse.getInt("id") +  "");
        return splitString.toString();

    }

//    @When("^I send a (.*) DELETE request to ProjectRequest$")
//    public void i_send_a_project_DELETE_request_to_ProjectRequest() {
//
//    }
}
