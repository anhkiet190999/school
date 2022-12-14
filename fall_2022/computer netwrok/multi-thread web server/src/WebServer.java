/*
Name: Hoang Anh Kiet Pham
Student ID: 1001904809
* */

import java.net.*;
import java.io.*;
import java.util.*;

public class WebServer {
    private static int port = 8080; //port number
    public static void main(String args[]) throws Exception{
        //create a server socket that listening to request from clients
        ServerSocket serverSocket = new ServerSocket(port);

        while(true) {
            //accept the request and create new sockets for this particular client
            Socket connectionSocket = serverSocket.accept();
            //create a new http request object to handle the request from client
            HttpRequest request = new HttpRequest(connectionSocket);

            //create and start a new separated thread for this client's request
            Thread thread = new Thread(request);
            thread.start();
        }
    }
}
/*
* refererence: https://www2.seas.gwu.edu/~cheng/6431/Projects/Project1WebServer/webserver.html?fbclid=IwAR3hFQA70zg9kbLhoU1kepyDm5UTHXSHc8MeeW4AsZLj6dAuVfFkpXvDalA
* */
