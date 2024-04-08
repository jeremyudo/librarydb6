import prisma from '@/client'
import { Student } from '@/types';
import { NextRequest } from "next/server";


export async function GET(req: NextRequest) {

    const students = await prisma.$queryRaw<Student[]>`
    SELECT * FROM students;`
    // console.log(tracks);
    return new Response(JSON.stringify(students))

};