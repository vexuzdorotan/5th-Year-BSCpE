import java.io.*;
import java.net.*;

public class MyServer{
	private static ServerSocket ss;
	private static Socket s;
	private static BufferedReader br;
	private static InputStreamReader isr;
	private static String message = "";
	private static Integer port = 6666;

	public static void main(String[] args){
		try{
			System.out.println(InetAddress.getLocalHost());
			while(true){
				ss = new ServerSocket(port);
				System.out.print("Server running at port " + port);
				s = ss.accept();

				DataInputStream dis = new DataInputStream(s.getInputStream());
						//isr = new InputStreamReader(s.getInputStream()); //to receive the data
						//br = new BufferedReader(isr);
						//message = br.readLine();
				message = dis.readUTF();
				System.out.println(message);

						//isr.close();
						//br.close();
				ss.close();
				s.close();
			}
					//System.out.println("A");
		}
		catch(IOException e){
			e.printStackTrace();
		}
	}
}