package com.study.oauth2.dto.posts;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.study.oauth2.entity.Posts;
import com.study.oauth2.entity.PostsImg;

import lombok.Data;

@Data
public class RegisterPostsReqDto {
	private String title;
	private int userId;
	private String content;
	private List<MultipartFile> imgFiles; //MultipartFile 객체로 받아야함
	
	public Posts toEntity() {
		return Posts.builder()
				.title(title)
				.userId(userId)
				.content(content)
				.build();
	}
}
