package com.eventgo.dto;

import lombok.Data;

@Data
public class SignupRequest {

	private String name;
    private String email;
    private String password;
    // optional: role, but better to force USER and set ADMIN manually in DB
}
