import {test,expect, APIResponse} from '@playwright/test'

import dotenv from 'dotenv'

dotenv.config()


test('My First API',async ({request})=>
{

  const Response : APIResponse = await request.get(`${process.env.BASE_URL}?access_key=${process.env.ACCESS_KEY}&hostname=0`)

const Rponse = await Response.json()


console.log(Rponse)

}
)