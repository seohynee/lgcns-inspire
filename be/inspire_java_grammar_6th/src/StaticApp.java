import features.stat.StaticDemo;

public class StaticApp {
    public static void main(String [] args) {
        StaticDemo demo = new StaticDemo();
        System.out.println(demo.message); // message는 인스턴스 소유의 변수이므로 new로 생성자 생성 후 접근
        demo.message = "메시지 변경";
        System.out.println(demo.message);

        System.out.println(StaticDemo.staticMessage); // static이므로 따로 생성자

        System.out.println(StaticDemo.staticMessage);

        // 상수는 수정이 불가능하다
        // StaticDemo.PI = 3.15;

        demo.instanceMethod();
        StaticDemo.classMethod();
    }
}
