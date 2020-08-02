import client from "./client";

// 로그인
export const login = ({ name, password }) =>
  client.post("/api/auth/login", { name, password });

// 회원가입
export const register = ({ name, password }) =>
  client.post("/api/auth/register", { name, password });

// 로그인 상태 확인
export const check = () => client.get("/api/auth/check");

// 로그아웃
export const logout = () => client.post("/api/auth/logout");
