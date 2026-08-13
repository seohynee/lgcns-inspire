public class StringApp {
    public static void main(String[] args) {
        // String str01 = "lgcns";
        // String str02 = "lgcns";
        // // 출력값 : str=01 == str02


        String str01 = new String("lgcns");
        String str02 = new String("lgcns");
    //// 출력값 : str=01 != str02

        // 주소값 비교 (key 값 비교 - 주소가 다르므로 false 출력 )
        if ( str01 == str02) {
            System.out.println("str=01 == str02");
        } else {
            System.out.println("str=01 != str02");
        }

        // 실제 내용 비교 (내용은 같으므로 true 출력)
        if ( str01.equals(str02)) {
            System.out.println("str=01.equals(str02)");
        } else {
            System.out.println("str=01.!equals(str02)");
        }

        // str01 = str01+"!!";
        StringBuffer sb = new StringBuffer(str01);
        sb.append("!!");
        sb.append("!!");
        sb.append("!!");
        sb.append("!!");
        String s = sb.toString();
    }
}
