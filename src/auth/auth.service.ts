import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signup() {
        return {
            message: ' this message form sign up'
        }
    }

    signin() {
        return {
            message: ' this message form sign In'
        }
    }
}