package com.example.groupproject.models;

//static class to hold authentication values:
//(1) secret key for encrypting and decrypting JWT's, 
//(2) expiration time for JWT's, 
//(3) header string and prefix for HTTP communication, 
//(4) url where user can register
//single source

public class AuthConstants {
	public static final String SECRET = "SuperSecretKey";
	public static final long EXPIRATION_TIME = 432_000_000;
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Authorization";
	public static final String SIGN_UP_URL = "/api/user/register";
}
