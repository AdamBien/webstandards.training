
package com.airhacks.clock.boundary;

import java.io.IOException;
import java.time.LocalTime;
import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.websocket.OnClose;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author airhacks.com
 */
@Startup
@Singleton
@ServerEndpoint("/clock")
public class Clock {

    private Session session;

    @OnOpen
    public void onConnect(Session session) {
        this.session = session;
    }

    @Schedule(hour = "*", minute = "*", second = "*/2")
    public void sendCurrentTime() {
        System.out.println(".");
        if (this.session != null && this.session.isOpen()) {
            try {
                this.session.getBasicRemote().sendText(LocalTime.now().toString());
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        }

    }

    @OnClose
    public void onClose(Session session) {
        System.out.println("Cleaning up: " + session);
    }


}
