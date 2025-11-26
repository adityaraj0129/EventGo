package com.eventgo.security;

@Configuration
public class FilterConfig {
	@Bean
    public FilterRegistrationBean<AuthFilter> authFilterRegistration(AuthFilter authFilter) {
        FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(authFilter);
        registrationBean.addUrlPatterns("/api/*");  // filter all API URLs
        registrationBean.setOrder(1);
        return registrationBean;
    }
}
