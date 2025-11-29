package com.eventgo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.eventgo.dto.ApiResponse;
import com.eventgo.dto.LoginRequest;
import com.eventgo.dto.SignupRequest;
import com.eventgo.entity.User;
import com.eventgo.service.imple.UserService;

import jakarta.servlet.http.HttpSession;

public class AuthController {
	  private final UserService userService = null;

	    @PostMapping("/signup")
	    public ResponseEntity<ApiResponse> signup(@RequestBody SignupRequest request) {
	        userService.registerUser(request);
	        return ResponseEntity.ok(new ApiResponse("User registered successfully"));
	    }

	    @PostMapping("/login")
	    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request,
	                                             HttpSession session) {

	        User user = userService.validateUser(request.getEmail(), request.getPassword());

	        // store in session
	        session.setAttribute("USER_ID", user.getId());
	        session.setAttribute("ROLE", user.getRole().name());

	        return ResponseEntity.ok(new ApiResponse("Login successful"));
	    }

	    @PostMapping("/logout")
	    public ResponseEntity<ApiResponse> logout(HttpSession session) {
	        session.invalidate();
	        return ResponseEntity.ok(new ApiResponse("Logged out"));
	    }

	    @GetMapping("/me")
	    public ResponseEntity<?> me(HttpSession session) {
	        Object userId = session.getAttribute("USER_ID");
	        Object role = session.getAttribute("ROLE");
	        if (userId == null) {
	            return ResponseEntity.status(401).body(new ApiResponse("Not logged in"));
	        }
	        return ResponseEntity.ok(
	                "UserId=" + userId + ", role=" + role
	        );
	    }
}
