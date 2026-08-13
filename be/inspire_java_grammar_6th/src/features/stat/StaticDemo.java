package features.stat;

public class StaticDemo {

    /*
    static(클래스, 변수, 메서드)
    - static 선언된 변수, 메서드는 인스턴스 소유가 아닌 클래스 소유!!
    final : 상수(const)
    - static final int PI = 3.14;
    */


    public String message = "인스턴스 소유의 변수";
    public static String staticMessage = "클래스 소유의 변수";
    public static final double PI = 3.14;


    public StaticDemo(){

    }

    // 반환타입 X, 매개변수 X
    // instanceMethod()는 instance 메서드 (instance, static 변수 모두 접근 가능)
    public void instanceMethod() {
        System.out.println("debug >>>> instanceMethod :"+message); // instance 변수 접근 OK
        System.out.println("debug >>>> instanceMethod :"+staticMessage); // static 변수 접근 OK
        System.out.println("debug >>>> instanceMethod :"+PI); // static 변수 접근 OK
    }

    // classMethod()는 static 메서드 (instance 변수는 접근 불가)
    public static void classMethod() {
        // error?
        // static 소유는 instance 소유(변수, 메서드) 접근 불가
        // System.out.println("debug >>>> instanceMethod :"+message);

        System.out.println("debug >>>> instanceMethod :"+staticMessage);
        System.out.println("debug >>>> instanceMethod :"+PI);
    }
}

