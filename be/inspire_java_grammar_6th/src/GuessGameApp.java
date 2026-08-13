import features.game.GuessGame;

import java.util.Scanner;

public class GuessGameApp {
    public static void main(String[] args) {
        GuessGame game = new GuessGame();
        String result = game.gameFor();
        System.out.println(result);


        // 샘플 코드
        // Scanner scan = new Scanner(System.in);
        // System.out.print(">>>> 생각하는 숫자를 입력하세요 : ");
        // int guess = scan.nextInt();
        // System.out.println("guess >>> "+guess);

    }

}
