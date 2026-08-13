import features.car.Car;

public class CarApp {
    // public static void main(String[] args) {
    //     Car car = new Car() ; // 객체 생성 (constructor)
    //     // car에 Car의 주소값을 담는다.

    //     Car audi = new Car();
    //     audi.brand = "아우디";
    //     System.out.println("brand "+audi.brand);

    //     /////////////////////////
    //     System.out.println();
    //     Car bmw = new Car("BMW");
    //     System.out.println("brand "+bmw.brand);

    //     /////////////////////////
    //     Car benz = new Car("BENZ","C200");
    //     System.out.println("brand "+benz.brand);
    //     System.out.println("brand "+benz.model);
    // }


    
    public static void main(String[] args) {
        Car audi = new Car();
        audi.setBrand("AUDI");
        System.out.println("brand "+audi.getBrand());

        /////////////////////////
        System.out.println();
        Car bmw = new Car("BMW");
        System.out.println("brand "+bmw.getBrand());

        /////////////////////////
        Car benz = new Car("BENZ","C200");
        System.out.println("brand "+benz.getBrand());
        System.out.println("brand "+benz.getModel());

        String carInfo = benz.carInfo() ;
        System.out.println("carInfo : "+carInfo);
    }
}
