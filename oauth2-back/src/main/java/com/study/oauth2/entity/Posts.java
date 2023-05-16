package com.study.oauth2.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Posts {
	private int postId;
	private int userId;
	private String title;
	private String content;
	
	private List<PostsImg> postsFiles;
}
