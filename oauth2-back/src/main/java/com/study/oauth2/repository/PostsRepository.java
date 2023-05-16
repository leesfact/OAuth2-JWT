package com.study.oauth2.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.study.oauth2.entity.Authority;
import com.study.oauth2.entity.Posts;
import com.study.oauth2.entity.PostsImg;
import com.study.oauth2.entity.User;


@Mapper
public interface PostsRepository {
	
	public int registerPosts(Posts posts);
	public int registerPostsImg(List<PostsImg> postsImgs);
	
}
