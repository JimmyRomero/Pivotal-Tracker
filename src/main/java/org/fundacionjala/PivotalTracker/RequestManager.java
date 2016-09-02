package org.fundacionjala.PivotalTracker;

import java.util.Map;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

/**
 * Request Manager
 */
public final class RequestManager {

    private static final RequestSpecification REQUEST_SPECIFICATION = Connection.getInstance().getRequestSpecification();

    private RequestManager() {
    }

    public static Response get(String endPoint) {
       return given().spec(REQUEST_SPECIFICATION)
                .when()
                .get(endPoint);
    }

    public static Response post(String endPoint, String body) {
        return given().spec(REQUEST_SPECIFICATION)
                .header("Content-Type", "application/json")
                .body(body)
                .when()
                .post(endPoint);
    }

    public static Response post(String endPoint, Map<String, Object> body) {
        return given().spec(REQUEST_SPECIFICATION)
                .params(body)
                .when()
                .post(endPoint);
    }

    public static Response put(String endPoint, String body) {
        return given().spec(REQUEST_SPECIFICATION)
                .body(body)
                .when()
                .put(endPoint);
    }

    public static Response put(String endPoint, Map<String, Object> body) {
        return null;
    }

    public static Response delete(String endPoint) {
        return null;
    }
}
