import features.blogs.domain.dto.BlogRequestDTO;

public class BlogApp {
    
    public static void main(String[] args) {

        System.out.println(">>>> new 연산자를 이용한 객체 생성");
        // BlogRequestDTO request = new BlogRequestDTO();

        BlogRequestDTO request = new BlogRequestDTO(1, "title", "content", "email");
//                                           ↑id  ↑title  ↑content   ↑email
//                                    (필드 선언 순서와 정확히 일치해야 함)
        System.out.println("title : "+request.getTitle());

        System.out.println();
        System.out.println(">>>> Builder 이용한 객체 생성");

        // BlogRequestDTO request = BlogRequestDTO.builder()
        //                             .title("자바 첫 날입니다.")
        //                             .content("재미있다")
        //                             .email("2seohxn@gmail.com")
        //                             .build() ;

        // request.setTitle("조기 퇴근");
        // System.out.println("title : "+request.getTitle());
    }
}
