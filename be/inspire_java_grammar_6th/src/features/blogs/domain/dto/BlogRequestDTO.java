package features.blogs.domain.dto;

import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

public class BlogRequestDTO {

    private Integer id;
    private String title;
    private String content;
    private String email;

}