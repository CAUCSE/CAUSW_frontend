// 최소 8 자, 하나 이상의 소문자, 숫자, 특수문자 정규식
export const passwordReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const emailReg = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]{2,3}/;
