// 최소 8 자, 하나 이상의 소문자, 숫자, 특수문자 정규식
export const passwordReg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const emailReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
