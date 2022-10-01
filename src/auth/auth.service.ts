import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from 'src/auth/dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  //methods here
  signIn(dto: AuthDto) {
    return console.log('Here is DTO', dto);
  }
  signUp(dto: AuthDto) {
    return console.log('Here is DTO', dto);
  }
}
