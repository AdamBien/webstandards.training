
package com.airhacks.answer.boundary;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 *
 * @author airhacks.com
 */
@Path("answers")
public class AnswersResource {

    @GET
    public JsonArray answers() {
        JsonArrayBuilder retVal = Json.createArrayBuilder();
        for (int i = 0; i < 10; i++) {
            retVal.add(this.create("answer " + i, i * 5, i));
        }
        return retVal.build();
    }

    JsonObject create(String answer, int precision, int duration) {
        return Json.createObjectBuilder().add("answer", answer).
                add("precision", precision).
                add("duration", duration).
                build();
    }

}
