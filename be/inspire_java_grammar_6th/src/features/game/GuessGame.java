package features.game;

import java.util.Scanner;

/*
Q) 숫자를 맞추는 게임
- 난수 (1 ~ 100) : answer
- 주어진 기회는 10번 (up, down)

콘솔로부터 데이터를 입력받기 위한 (java.util.Scanner)
Scanner - 입력을 받아서 파싱(해석)해주는 도구
new Scanner(System.in) - "키보드로부터 입력을 읽어들이는 Scanner 객체"를 새로 생성

반환값
- 성공) "x번째 정답을 맞췄습니다."
- 실패) "10번의 기회를 모두 사용하였습니다."
*/

public class GuessGame {

    public GuessGame(){
        System.out.print(">>>> 생각하는 숫자를 입력하세요 : ");
    }

    public String gameFor() {
        Scanner scan = new Scanner(System.in);
        int answer = (int)(Math.random() *100) +1; // 정답 설정

        for (int i = 1; i<= 10; i++) {
            int guess = scan.nextInt();
            // .nextInt() : 사용자가 입력한 값을 정수(int) 형태로 읽어옴

            System.out.println("guess >>> "+guess); // 사용자 추측값 출력

            
            // 맞췄을 때 결과
            System.out.println(i + "번 째 정답을 맞췄습니다.");

        }
    }

    public String gameWhile() {
        return null;
    }

    public String gameDoWhile() {
        return null;
    }
}
