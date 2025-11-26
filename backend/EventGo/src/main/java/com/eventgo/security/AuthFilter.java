package com.eventgo.security;

@Component
public class AuthFilter {

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req  = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        String path   = req.getRequestURI();
        String method = req.getMethod();

        // Public endpoints
        if (path.startsWith("/api/auth")
                || (path.equals("/api/events") && "GET".equalsIgnoreCase(method))) {
            chain.doFilter(request, response);
            return;
        }

        HttpSession session = req.getSession(false);

        // must be logged in for other /api/** calls
        if (session == null || session.getAttribute("USER_ID") == null) {
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.getWriter().write("Unauthorized");
            return;
        }

        // For /api/admin/**, user must be ADMIN
        if (path.startsWith("/api/admin")) {
            String role = (String) session.getAttribute("ROLE");
            if (!"ADMIN".equals(role)) {
                res.setStatus(HttpServletResponse.SC_FORBIDDEN);
                res.getWriter().write("Forbidden");
                return;
            }
        }

        chain.doFilter(request, response);
}
