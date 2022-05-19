import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {

    }

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