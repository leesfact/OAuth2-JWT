package com.study.oauth2.security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {
	
	private final JwtTokenProvider jwtTokenProvider;
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest httpServletRequest = (HttpServletRequest) request; //downcasting
		String accessToken = jwtTokenProvider.getToken(httpServletRequest.getHeader("Authorization"));
		//System.out.println(accessToken);
		boolean validatedFlag = jwtTokenProvider.validateToken(accessToken);
		
		if(validatedFlag) {
			Authentication authentication = jwtTokenProvider.getAuthentication(accessToken);
			SecurityContextHolder.getContext().setAuthentication(authentication); // 여기 안에는 static method로 전역으로 쓸 수 있음 -> setAuthentication 하면 인증이 됐다는 의미
			
		}
		
		
		
		chain.doFilter(request, response); // 이게 없으면 필터는 다음으로 안넘어간다.
		
	}

}
